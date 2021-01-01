<template>
    <div class="fullplayer">
        <div class="fullplayerbg">
            <img :src="data.cover" width="100%" height="100%"/>
        </div>
        <div class="fullplayerclose" @click="closePlayer()"></div>
        <header class="fullplayerheader">
            <p class="fullplaytitle">{{data.songname}}</p>
            <p class="fullplaymsg">{{data.singer}}</p>
        </header>
        <vue-touch @swipeleft="updateTab(1)" @swiperight="updateTab(0)">
            <div class="fullplayercontent">
                <img v-show="tab == 0" :src="data.cover" :alt="data.songname" class="fullplayercontentcover playanimation"/>
                <span v-show="tab === 0" class="fullplayerlyicline">{{lyric}}</span>
                <div v-show="tab == 1" class="fullplayerfulllyric" ref="fulllyricRef">
                    <div v-if="lines.length > 0 && tab == 1">
                        <span v-for="(line,index) in lines" :key="index" class="fullplayerlyicfullline" :class="{active: index == lineno}" ref="lyriclineref">{{line}}</span>
                    </div>
                    <span v-if="lines.length <= 0" class="fullplayerlyicfullline noresult">
                        暂无歌词
                    </span>
                </div>
            </div>
        </vue-touch>
        <div class="fullplayerbottom">
            <div class="fullplayertab">
                <div :class="{fullplayerdotact: tab == 0, fullplayerdot: tab == 1}"></div>
                <div :class="{fullplayerdotact: tab == 1, fullplayerdot: tab == 0}"></div>
            </div>
            <div class="fullplayertime">
                <span class="fullplayertimestart">{{start}}</span>
                <span class="flllplayerprogress"></span>
                <span class="fullplayertimeend">{{end}}</span>
            </div>
            <footer class="fullplayerfooter">
                <i class="fullplayorder"></i>
                <i class="fullplayprev"></i>
                <i class="fullplayon"></i>
                <i class="fullplaynext"></i>
                <i class="fullplayfavor"></i>
            </footer>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { getMockLyricResponse, getMockPlayData } from "../mock/MockData"
import { EventHub, EventType } from "../model/EventHub"
import {PlayData} from "../model/view/ViewData"
import BetterScroll from "better-scroll"
import LyricParser from "lyric-parser"
import {Base64} from "js-base64"
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: "vue-touch"})
interface LyricLine {
    line: string;
    active: boolean;
}

@Component({name: "FullPlayer"})
export default class FullPlayer extends Vue {
    data: PlayData = getMockPlayData()
    start: string = "0:08"
    end: string = "4:19"
    tab: number = 0
    parser: LyricParser|undefined = undefined
    lyric: string = ""
    lines: string[] = []
    lineno: number = 0
    scroll: BetterScroll|undefined = undefined
    mounted(){
        this.data.lyric = Base64.decode(getMockLyricResponse().lyric)
        this.parser = new LyricParser(this.data.lyric, (obj: any) => {
            this.lyric = obj.txt
            this.lineno = obj.lineNum
            if (this.tab == 1) {
                this.refreshLinePos()
            }

            var newLines = this.lines.slice(0)
            this.lines = newLines
        })

        for (let line of this.parser.lines) {
            this.lines.push(line.txt)
        }

        this.parser.play()
        this.scroll = new BetterScroll(this.$refs.fulllyricRef as HTMLElement, {click: true})
    }

    updateTab(tab: number){
        this.tab = tab
        if (this.tab == 1){
            Vue.nextTick(() => {
                this.scroll.refresh()
            })
        }
    }

    refreshLinePos(){
        let lineEle = this.$refs.lyriclineref[this.lineno] as HTMLElement
        let offsetY = lineEle.offsetTop + lineEle.clientHeight
        let height = (this.$refs.fulllyricRef as HTMLElement).clientHeight
        let lyricCollection = (this.$refs.fulllyricRef as HTMLElement).children[0] as HTMLElement
        let lyricLinesHeight = lyricCollection.clientHeight
        if (offsetY > height / 2 && lyricLinesHeight - offsetY > height / 2) {
            this.scroll.scrollTo(0, height / 2 - offsetY)
        }
        else if (this.scroll.hasVerticalScroll) {
            this.scroll.scrollTo(0, 0)
        }
    }

    closePlayer() {
        EventHub.FireEvent(EventType.FullPlayerEvent, false)
    }
}
</script>
<style lang="scss">
.fullplayer{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 200;
    background: #222;
}

.fullplayerbg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .6;
    filter: blur(60px);
}

.fullplayerclose{
    position: absolute;
    font-size: 22px;
    padding: 9px;
    top: 0;
    left: 6px;
    z-index: 40;
    color: #ffcd32;
    transform: rotate(-90deg);
}

.fullplayerclose::before{
    content: "\E911";
    font-family: music-icon;
}


.fullplayerheader{
    margin-bottom: 25px;
    color: white;
}

.fullplaytitle{
    width: 70%;
    line-height: 40px;
    margin: 0 auto;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 18px;
}

.fullplaymsg{
    line-height: 20px;
    text-align: center;
}

.fullplayercontent{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: fixed;
    top: 80px;
    bottom: 170px;
    left: 0;
}

.fullplayercontentcover{
    width: 80vw;
    height: 80vw;
    object-fit: contain;
    border-radius: 50%;
    margin: 0 auto;
}

.fullplayerfulllyric{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;
}

.fullplayerlyicfullline{
    width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    padding: 0;
    border: 0;
    height: 32px;
    line-height: 32px;
    color: hsla(0, 0%, 100%, .5);
    display: block;
}

.fullplayerlyicfullline.noresult{
    margin: auto 0;
}

.fullplayerlyicfullline.active{
    color: white;
}


.fullplayerlyicline{
    width: 80%;
    margin: 30px auto 0 auto;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    padding: 0;
    border: 0;
    height: 20px;
    line-height: 20px;
    color: hsla(0, 0%, 100%, .5);
    display: block;
}

.fullplayerbottom{
    position: fixed;
    width: 100%;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fullplayertab{
    display: flex;
}

.fullplayerdotact{
    margin: 0 4px;
    width: 20px;
    height: 8px;
    border-radius: 5px;
    background: hsla(0, 0%, 100%, .8);
}

.fullplayerdot{
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background: hsla(0, 0%, 100%, .8);

}

.fullplayertime{
    display: flex;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    padding: 10px 0;
    height: 30px;
}

.fullplayertimestart{
    font-size: 12px;
    color: white;
    text-align: left;
    width: 30px
}


.fullplayertimeend{
    font-size: 12px;
    color: white;
    text-align: right;
    width: 30px;
}

.flllplayerprogress{
    flex: 1;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
}

.fullplayerfooter{
    width: 100%;
    align-items: center;
    display: flex;
    padding: 0;
    border: 0;
    color: #ffcd32;
    justify-content: space-evenly;
    font-family: music-icon;
    font-size: 30px;
}

.fullplayorder::before{
    content: "\E90F";
}

.fullplayprev::before{
    content: "\E90D";
}

.fullplayon::before{
    content: "\E90C";
    font-size: 40px;
}

.fullplaynext::before{
    content: "\E913";
}

.fullplayfavor::before{
    content: "\E90A";
}
</style>
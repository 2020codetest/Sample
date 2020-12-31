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
        <div class="fullplayercontent">
            <img v-show="tab == 0" :src="data.cover" :alt="data.songname" class="fullplayercontentcover playanimation"/>
            <div v-show="tab == 1">暂无歌词</div>
        </div>
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
import { getMockPlayData } from "../mock/MockData"
import { EventHub, EventType } from "../model/EventHub"
import {PlayData} from "../model/view/ViewData"

@Component({name: "FullPlayer"})
export default class FullPlayer extends Vue {
    data: PlayData = getMockPlayData()
    start: string = "0:08"
    end: string = "4:19"
    tab: number = 0
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
    width: 80vw;
    height: 80vw;
    margin: 0 auto;
}

.fullplayercontentcover{
    width: 80vw;
    height: 80vw;
    object-fit: contain;
    border-radius: 50%;
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
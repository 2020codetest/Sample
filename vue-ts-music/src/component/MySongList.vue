<template>
    <div class="mysonglist">
        <header class="mysonglisthead">
            <div class="mysonglistback" @click="back()">
                <i class="mysonglistbackicon"></i>
            </div>
            <ul class="mysonglisttab">
                <li v-for="item in tabs" :key="item.id" class="mysonglisttitle" :class="{sel : item.sel}" @click="select(item.id)">{{item.title}}</li>
            </ul>
        </header>
        <RandomePlayAllComponent color="hsla(0, 0%, 100%, .5)" />
        <div class="mysonglistwrapper" ref="songlist">
            <ul v-if="activelist.length" class="mysonglistitems" >
                <li v-for="item in activelist" :key="item.id" class="mysonglistitem" @click="gotoFullPlayer()">
                    <p class="mysonglistitemtitle">{{item.name}}</p>
                    <p class="mysonglistiteminfo">{{item.singer}} {{item.album}}</p>
                </li>
            </ul>
            <div v-else class="mysonglistnoresultwrapper">
                <img :src="require('../asset/noresult.png')" class="mysonglistnoresult"/>
                <span class="mysonglistnoresultmsg">{{active.id === 0 ? "暂无收藏歌曲": "你还没有听过歌曲"}}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import RandomePlayAllComponent from "./subcomponent/RandomPlayAll.vue"
import {Vue, Component, Prop} from "vue-property-decorator"
import { EventHub, EventType } from "../model/EventHub"
import { getMockRecentSongList } from "../mock/MockData"
import BetterScroll from "better-scroll"
import { UserSong } from "../model/user/Song"
interface MySongListTab {
    title: string;
    sel: boolean;
    id: number;
};

@Component({name: "MySonogListComponent", components: {RandomePlayAllComponent}})
export default class MySongList extends Vue {
    recent: UserSong[] = getMockRecentSongList()
    like: UserSong[] = []
    activelist: UserSong[] = []
    tabs: MySongListTab[] = [{title: "我喜欢的", sel: true, id: 0}, {title: "最近听的", sel: false, id: 1}]
    active: MySongListTab = this.tabs[0]
    scroll: BetterScroll|undefined = undefined
    mounted() {
        this.scroll = new BetterScroll(this.$refs.songlist as HTMLElement, {click: true})
    }

    select(id: number) {
        for (let tab of this.tabs) {
            if (tab.id === id) {
                tab.sel = true
                this.active = tab
                this.activelist = id == 0 ? this.like : this.recent
                Vue.nextTick(() => {
                    this.scroll.refresh()
                })
            }
            else{
                tab.sel = false
            }
        }
    }

    back() {
        EventHub.FireEvent(EventType.MySongListEvent, false)
    }

    gotoFullPlayer() {
        EventHub.FireEvent(EventType.FullPlayerEvent, true)
    }
}
</script>
<style lang="scss">
.mysonglist{
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: #222;
}

.mysonglisthead{
    position: relative;
    margin: 10px 0 30px 0;
}

.mysonglistback{
    position: absolute;
    left: 6px;
    top: 0;
    margin: 0;
    padding: 0;
    border: none;
}

.mysonglistbackicon{
    display: block;
    padding: 10px;
    font-size: 22px;
    color: #ffcd32;
}

.mysonglistbackicon::before{
    content: "\E911";
    font-family: music-icon;
}

.mysonglisttab{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 240px;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #333;
}

.mysonglisttitle{
    flex: 1;
    padding: 8px;
    text-align: center;
    color: hsla(0, 0%, 100%, .3)
}

.mysonglisttitle.sel{
    color: white;
    background: #333;
}

.mysonglistwrapper{
    top: 110px;
    bottom: 0;
    width: 100%;
    position: absolute;
    overflow-y: scroll;
}

.mysonglistnoresultwrapper{
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
}

.mysonglistitems{
    padding: 20px 30px;
    border: 0;
    margin: 0;
}

.mysonglistitem{
    height: 64px;
    line-height: 20px;
}

.mysonglistitemtitle{
    color: white;
    margin: 0;
    padding: 0;
    border: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.mysonglistiteminfo{
    color: hsla(0,0%,100%,.3);
    margin: 4px 0 0 0;
    padding: 0;
    border: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.mysonglistnoresult{
    width: 86px;
    height: 90px;
    margin: 0 auto;
}

.mysonglistnoresultmsg{
    color: hsla(0,0%,100%,.3);
    margin-top: 30px;
    text-align: center;
}
</style>
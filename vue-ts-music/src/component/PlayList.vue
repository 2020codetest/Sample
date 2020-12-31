<template>
    <div class="playlist">
        <div class="playlistback" @click="back()">
            <i class="playlistbackicon"></i>
        </div>
        <h1 class="playlisttitle" ref="titleRef">{{data.title}}</h1>
        <div class="playlistcoverwrap">
            <img :src="data.cover" :alt="data.title" class="playlistcover"/>
            <div class="playlistcoverfilter" />
            <RandomePlayAllComponent color="#ffcd32" class="playlistrandomplay"/>
        </div>
        <div class="playlistitems" ref="playlistref">
            <ul :style="{margin: 0, border: 0, padding: 0}">
                <li v-for="item in data.list" :key="item.id" class="playlistitem">
                    <p class="playlistitemtitle">{{item.name}}</p>
                    <p class="playlistiteminfo">{{item.singer}}.{{item.album}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import RandomePlayAllComponent from "./subcomponent/RandomPlayAll.vue"
import {Vue, Component, Prop} from "vue-property-decorator"
import { getMockAlbumResponse } from "../mock/MockData";
import { EventHub, EventType } from "../model/EventHub";
import { convertAlbumResponse } from "../model/view/ViewConverter";
import {PlayListData} from "../model/view/ViewData"
import BetterScroll from "better-scroll"

@Component({name: "PlayListComponent", components: {RandomePlayAllComponent}})
export default class PlayList extends Vue{
    data: PlayListData = convertAlbumResponse(getMockAlbumResponse(), "", "");

    back() {
        EventHub.FireEvent(EventType.PlayListEvent, false)
    }

    mounted() {
        let scroll  = new BetterScroll(this.$refs.playlistref as HTMLElement, {click: true})
        scroll.on('scroll', (pos) => {
            console.log(pos.y)
        })
    }
}
</script>
<style lang="scss">
.playlist {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    background: #222;
    display: flex;
    flex-direction: column;
}

.playlistback{
    position: absolute;
    left: 6px;
    top: 0;
    padding: 10px;
    font-size: 22px;
    color: #ffcd32;
    z-index: 50;
}

.playlistback::before{
    font-family: music-icon;
    content: "\E911";
}

.playlisttitle{
    width: 80%;
    position: absolute;
    z-index: 40;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: white;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    left: 50%;
    transform: translateX(-50%);
}

.playlistcoverwrap{
    width: 100vw;
    height: 70vw;
    position: relative;
}

.playlistrandomplay{
    position: absolute;
    bottom: 20px;
    z-index: 50;
    left: 50%;
    transform: translateX(-50%);
}

.playlistcover {
    width: 100vw;
    height: 70vw;
    object-fit: cover;
}

.playlistcoverfilter{
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,.4);
    position: absolute;
    top: 0;
    left: 0;
}

.playlistitems{
    position:absolute;
    top: 70vw;
    bottom: 0;
    padding: 20px 30px;
}

.playlistitem{
    display: flex;
    height: 64px;
    font-size: 14px;
    flex-direction: column;
}

.playlistitemtitle{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: white;
    margin: 0;
    padding: 0;
    border: 0;
}

.playlistiteminfo{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 4px;
    color: hsla(0, 0%, 100%, .3);    
}
</style>
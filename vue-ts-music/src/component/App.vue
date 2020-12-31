<template>
    <div class="root">
        <HeaderComponent />
        <TabComponent />
        <div class="content" v-if="!mylist && tab == 0">
            <RecommendationComponent />
        </div>
        <div class="content" v-if="!mylist && tab == 1">
            <SingerListComponent />
        </div>
        <div class="content" v-if="!mylist && tab == 2">
            <TopListComponent />
        </div>
        <div class="content" v-if="!mylist && tab == 3">
            <SearchComponent />
        </div>
        <MySonogListComponent v-if="mylist"/>
        <PlayListComponent v-if="playlist" />
        <FullPlayerComponent v-if="fullplayer" />
        <ShortPlaerCompoent v-if="shortplayer" />
    </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import HeaderComponent from "./Header.vue"
import TabComponent from "./Tab.vue"
import RecommendationComponent from "./Recommendation.vue"
import SingerListComponent from "./SingerList.vue"
import MySonogListComponent from "./MySongList.vue"
import TopListComponent from "./TopList.vue"
import SearchComponent from "./Search.vue"
import PlayListComponent from "./PlayList.vue"
import FullPlayerComponent from "./FullPlayer.vue"
import ShortPlaerCompoent from "./ShortPlayer.vue"
import {EventHub, EventData, EventType} from "../model/EventHub"
import BetterScroll from "better-scroll"

let userCallback: (data: EventData) => void | undefined = undefined;
let tabCallback: (data: EventData) => void | undefined = undefined;
let playListCallback: (data: EventData) => void | undefined = undefined;
let fullplayerCallback: (data:EventData) => void | undefined = undefined
let shortplayerCallback: (data: EventData) => void | undefined = undefined
@Component({name: "App", components: {HeaderComponent, TabComponent,  RecommendationComponent, SingerListComponent, MySonogListComponent, TopListComponent, SearchComponent, PlayListComponent, FullPlayerComponent, ShortPlaerCompoent}})
export default class App extends Vue {
    mylist: boolean = false
    playlist: boolean = false
    fullplayer: boolean = false
    tab: number = 0
    shortplayer: boolean = true
    mounted() {
        console.log("App loaded")
        userCallback = this.showMySongList.bind(this)
        EventHub.RegisterEvent(EventType.MySongListEvent, userCallback)
        tabCallback = this.switchTab.bind(this)
        EventHub.RegisterEvent(EventType.HomePageTab, tabCallback)
        playListCallback = this.showPlayList.bind(this)
        EventHub.RegisterEvent(EventType.PlayListEvent, playListCallback)
        fullplayerCallback = this.showFullPlayer.bind(this)
        EventHub.RegisterEvent(EventType.FullPlayerEvent, fullplayerCallback)
        shortplayerCallback = this.showShortPlayer.bind(this)
        EventHub.RegisterEvent(EventType.ShortPlayerEvent, shortplayerCallback)
    }

    showMySongList(show: EventData) {
        this.mylist = show.data
    }

    switchTab(tab: EventData) {
        this.tab = tab.data
    }

    showPlayList(data: EventData) {
        this.playlist = data.data
    }

    showFullPlayer(data: EventData) {
        this.fullplayer = data.data
    }

    showShortPlayer(data: EventData) {
        this.shortplayer = data.data
    }

    destroyed(){
        EventHub.UnregisterEvent(EventType.MySongListEvent, userCallback)
        EventHub.UnregisterEvent(EventType.HomePageTab, tabCallback)
        EventHub.UnregisterEvent(EventType.PlayListEvent, playListCallback)
        EventHub.UnregisterEvent(EventType.FullPlayerEvent, fullplayerCallback)
        EventHub.UnregisterEvent(EventType.ShortPlayerEvent, shortplayerCallback)
    }
}
</script>
<style lang="scss">
@font-face {
    font-family: music-icon;
    src: url(../asset/music-icon.ttf);
}

body{
    margin: 0;
    background: #222;
    font-size: 14px;
    font-family: mu;
}

li {
    list-style: none;
}

i{    
    font-style: normal;
}

p{
    margin: 0;
    padding: 0;
    border: 0;
}

.root{
    width: 100vw;
    height: 100vh;
}

.content{
    width: 100%;
    position: fixed;
    top: 88px;
    bottom: 0;
}


.playanimation{
    animation-duration: 15s;
    animation-name: playercoverloop;
    animation-iteration-count: infinite;
    animation-delay: 0;
    animation-timing-function: linear;
}

@keyframes playercoverloop {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(1turn);
    }
}

</style>
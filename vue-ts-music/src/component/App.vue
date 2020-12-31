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
import {EventHub, EventData, EventType} from "../model/EventHub"
import BetterScroll from "better-scroll"

let userCallback: (data: EventData) => void | undefined = undefined;
let tabCallback: (data: EventData) => void | undefined = undefined
@Component({name: "App", components: {HeaderComponent, TabComponent,  RecommendationComponent, SingerListComponent, MySonogListComponent, TopListComponent, SearchComponent}})
export default class App extends Vue {
    mylist: boolean = false;
    tab: number = 0
    mounted() {
        console.log("App loaded")
        userCallback = this.showMySongList.bind(this)
        EventHub.RegisterEvent(EventType.MySongListEvent, userCallback)
        tabCallback = this.switchTab.bind(this)
        EventHub.RegisterEvent(EventType.HomePageTab, tabCallback)
    }

    showMySongList(show: EventData) {
        this.mylist = show.data
    }

    switchTab(tab: EventData) {
        this.tab = tab.data
    }

    destroyed(){
        EventHub.UnregisterEvent(EventType.MySongListEvent, userCallback)
        EventHub.UnregisterEvent(EventType.HomePageTab, tabCallback)
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

</style>
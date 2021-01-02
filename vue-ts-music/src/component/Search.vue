<template>
<div class="content">
    <div class="search-box">
        <i class="icon-search"/>
        <input placeholder="搜索歌曲、歌手" class="search-input" v-model="query" />
        <i class="icon-dimiss" v-show="query" @click="query=''"/>
    </div>
    <div v-if="!showResult && hotKeys.length" class="search-keys">
        <span class="search-keys-title">热门搜索</span>
        <ul class="search-key-list">
            <li v-for="q in hotKeys" :key="q.key" class="search-key" @click="search(q.key)">{{q.key}}</li>
        </ul>
    </div>
    <div v-show="showResult" ref="resultRef" class="search-result">
        <ul class="search-result-list">
            <li v-for="song in searchResult.data.song.list" :key="song.songid" class="search-result-item" @click="gotoFullPlayer()">
                <i class="icon-music"></i>
                <span class="search-result-info">{{song.songname}}-{{song.singer[0].name}}</span>
            </li>
        </ul>
    </div>
</div>
</template>
<script lang="ts">
import BetterScroll from "better-scroll"
import {Vue, Component, Prop, Watch} from "vue-property-decorator"
import { getMockHotKeyResposne, getMockSearchResponse } from "../mock/MockData"
import { EventHub, EventType } from "../model/EventHub"
import { SearchResult } from "../model/search/SearchResult"
import { convertHotKeyResponse } from "../model/view/ViewConverter"
import { HotKeyItem } from "../model/view/ViewData"

@Component({name: "SearchComponent"})
export default class Search extends Vue {
    hotKeys: HotKeyItem[] = convertHotKeyResponse(getMockHotKeyResposne())
    query: string = ""
    showResult: boolean = false;
    searchResult: SearchResult = {data: {song: {list: []}}}

    search(query: string) {
        this.query = query
        this.showResult = true
        this.searchResult = getMockSearchResponse()
        Vue.nextTick(() => {
            new BetterScroll(this.$refs.resultRef as HTMLElement, {click: true})     
        })
    }

    @Watch("query")
    watchQuery(query: string) {
        if (!query.trim()) {
            this.showResult = false
        }
        else{
            this.search(query)
        }
    }

    gotoFullPlayer() {
        EventHub.FireEvent(EventType.FullPlayerEvent, true)
    }
}
</script>
<style lang="scss">
.search-box{
    display: flex;
    padding: 0 6px;
    height: 40px;
    background: #333;
    border-radius: 6px;
    margin: 20px;
    align-items: center;
}

.icon-search{
    font-size: 24px;
    color: #222;
}

.icon-search::before{
    font-family: music-icon;
    content: "\E906";
}

.icon-dimiss{
    font-size: 16px;
    color: #222;
}

.icon-dimiss::before{
    font-family: music-icon;
    content: "\E914";

}

.search-input {
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    background: #333;
    font-size: 14px;
    color: white;
    outline: 0;
    border: 0;
    padding: 0;
}

.search-keys{
    margin: 0 20px 20px 20px;
}

.search-keys-title{
    margin-bottom: 20px;
    color: hsla(0, 0%, 100%, .5);
    display: block;
}

.search-key-list{
    margin:0;
    padding: 0;
    border: 0;
    width: 100%;
}

.search-key{
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    background: #333;
    color: hsla(0, 0%, 100%, .3);
    border-radius: 6px;
}

.icon-music{
    color: hsla(0, 0%, 100%, .3);
    font-family: music-icon;
}

.search-result{
    position: fixed;
    width: 100%;
    top: 178px;
    bottom: 0;
    overflow: hidden;
}

.search-result-list{
    margin: 0;
    padding: 0 30px;
}

.search-result-item{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
}

.search-result-info{
    margin-left: 16px;
    flex: 1;
    color: hsla(0, 0%, 100%, .3 );
    overflow:hidden;
}

.icon-music::before{
    content: "\E905";
}
</style>
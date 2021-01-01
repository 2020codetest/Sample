<template>
<div class="content">
    <div class="toplistwrap" ref="toplist">
        <ul class="toplist">
            <li v-for="item in list" :key="item.id" class="toplistitem">
                <img :src="item.picUrl" :alt="item.topTitle"  class="toplistcover"/>
                <ul class="toplistsinglist">
                    <li v-for="(singer, index) in item.songList"  :key="index">
                        <div class="toplistsing">{{index + 1}} {{singer.songname}}-{{singer.singername}}</div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import {TopItem} from "../model/rank/TopItem"
import BetterScroll from "better-scroll"
import { getMockTopResponse } from "../mock/MockData"
import { convertTopResponse } from "../model/view/ViewConverter"

@Component({name: "TopListComponent"})
export default class TopList extends Vue {
    list: TopItem[] = convertTopResponse(getMockTopResponse())
    mounted() {
        new BetterScroll(this.$refs.toplist as HTMLElement)
    }
}
</script>
<style lang="scss">
.toplistwrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.toplist{
    margin: 0;
    padding: 0;
    border: 0;
}

.toplistitem {
    display: flex;
    margin: 0 20px;
    padding-top: 20px;
    height: 100px;
}

.toplistcover{
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.toplistsinglist{
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    background: #333;
    color: hsla(0, 0%, 100%, .3);
    font-size: 12px;
}

.toplistsing{
    line-height: 26px;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 26px;
}
</style>
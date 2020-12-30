<template>
    <div>
        <span class="songlistrectitle">热门歌单推荐</span>
        <ul class="songlistreclist">
            <SongListComponent v-for="item in list" :key="item.id" :reco="item"/>
        </ul>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { SongListRecomendation } from "../model/Recommendation"
import SongListComponent from "./SongList.vue"

@Component({name: "SongListRec", components: {SongListComponent}})
export default class SongListRec extends Vue{
    @Prop()
    list: SongListRecomendation[]
    mounted() {
    }
}
</script>
<style lang="scss">
.songlistrectitle{
    width: 100%;
    height: 65px;
    text-align: center;
    line-height: 64px;
    color: #ffcd32;
    display: block;
}

.songlistreclist{
    margin: 0;
    padding: 0;
    border: 0;
}
</style>
<template>
    <div>
        <span class="songlistrectitle">热门歌单推荐</span>
        <ul class="songlistreclist">
            <DiscComponent v-for="item in list" :key="item.id" :disc="item"/>
        </ul>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { DiscItem } from "../../model/view/ViewData"
import DiscComponent from "./Disc.vue"

@Component({name: "SongListRec", components: {DiscComponent}})
export default class DiscListRec extends Vue{
    @Prop()
    list: DiscItem[]
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
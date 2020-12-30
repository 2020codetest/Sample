<template>
    <div class="recowrapper" ref="recoSec">
        <div class="recoinnerwrapper">
            <CoverRecComponent :items="items" />
            <SongListRecComponent :list="list" />
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { CoverRecomendation, SongListRecomendation } from "../model/Recommendation"
import CoverRecComponent from "./CoverRec.vue"
import SongListRecComponent from "./SongListRec.vue"
import BetterScroll from "better-scroll"

@Component({name: "Recommendation", components: {CoverRecComponent, SongListRecComponent,}})
export default class Recommendation extends Vue {
    @Prop()
    items: CoverRecomendation[]

    @Prop()
    list: SongListRecomendation[]

    mounted() {
        let scroll = new BetterScroll(this.$refs.recoSec as HTMLElement)
    }
}
</script>
<style lang="scss">
.recowrapper{
    width: 100%;
    overflow: hidden;
    height: 100%;
}

.recoinnerwrapper{
    width: 100%;
}
</style>
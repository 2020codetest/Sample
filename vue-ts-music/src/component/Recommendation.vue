<template>
    <div class="recowrapper" ref="recoSec">
        <div class="recoinnerwrapper">
            <CoverRecComponent :items="items" />
            <DiscListRecComponent :list="list" />
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import CoverRecComponent from "./CoverRec.vue"
import DiscListRecComponent from "./DiscListRec.vue"
import BetterScroll from "better-scroll"
import { getMockDiscRecResponse, getMockSliderResponse } from "../mock/MockData"
import { CoverRecItem, DiscItem } from "../model/view/ViewData"
import {convertDiscRecResponse, convertSliderResponse} from "../model/view/ViewConverter"

@Component({name: "Recommendation", components: {CoverRecComponent, DiscListRecComponent}})
export default class Recommendation extends Vue {
    items: CoverRecItem[] = convertSliderResponse(getMockSliderResponse())
    list: DiscItem[] = convertDiscRecResponse(getMockDiscRecResponse())

    mounted() {
        new BetterScroll(this.$refs.recoSec as HTMLElement, {click: true})
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
<template>
    <section class="tab">
        <div v-for="item in list" :key="item.title" class="tabitem" @click="select(item.id)">
            <span class="tabtxt" :class="{sel : item.sel}">{{item.title}}</span>
        </div>
    </section>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import { EventHub, EventType } from "../model/EventHub"
interface TabInfo{
    title: string;
    sel: boolean;
    id: number;
}

@Component({name: "TabComponent"})
export default class Tab extends Vue{
    list: TabInfo[] = [{title: "推荐", sel: true, id: 0}, {title: "歌手", sel: false, id: 1}, {title: "排行", sel: false, id: 2}, {title: "搜索", sel: false, id: 3}]
    mounted() {
        console.log("TabComponent loaded")
    }

    select(id: number) {
        if (!this.list[id].sel) {
            for (let item of this.list) {
                if (item.id == id) {
                    item.sel = true
                }
                else{
                    item.sel = false
                }
            }

            EventHub.FireEvent(EventType.HomePageTab, id)
        }
    }
}
</script>
<style lang="scss">
.tab{
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 100%;
    font-size: 14px;
}

.tabitem{
    flex: 1;
    text-align: center;
    line-height: 44px;
    height: 44px;
}

.tabtxt {
    color: white;
}

.tabtxt.sel{
    color: #ffcd32;
    border-bottom: 2px solid #ffcd32;
}
</style>
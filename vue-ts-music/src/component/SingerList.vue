<template>
<div class="content">
  <div class="singerlistview" ref="listViewRef">
    <ul>
      <li v-for="group in singers" class="singerlistgroup" :key="group.id" ref="listGroupRef">
        <span class="singerlistgroup-title">{{ group.title }}</span>
        <ul>
          <li v-for="item in group.items" class="singerlistgroup-item" :key="item.id" @click="gotoPlayList()">
            <img :src="item.avatar" class="singerlistgroup-itemavatar">
            <span class="singerlistgroup-itemname">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="singerlist-shortcut">
      <ul>
        <li v-for="(item, index) in shortcutList"
        class="singerlist-shortcutitem"
        :data-index="index"
        :key="item.id"
        :class="{'singerlist-shortcutitemcurrent': currentIndex === index}"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import { SingerRepo } from "../model/singer/Singer"
import { getMockSingerList } from "../mock/MockData"
import BetterScroll from "better-scroll"
import { EventHub, EventType } from "../model/EventHub"

@Component({name: "SingerListComponent"})
export default class SingerList extends Vue{
    shortcutList: string[] = []
    singers: SingerRepo[] = getMockSingerList()
    scrollY: number = 0
    currentIndex: number = 0
    listHeight: number[] = []
    mounted() {
        let list: string[] = []
        for (let repo of this.singers) {
            list.push(repo.title)
        }

        this.shortcutList = list
        this.initScroll()
        this.calculateHeight()
    }

    initScroll() {
        let scroll = new BetterScroll(this.$refs.listViewRef as HTMLElement, {click: true})
        scroll.on('scroll', (pos) => {
            let y = pos.y
            if (y > 0) {
                this.currentIndex = 0
                return;
            }

            for (let i = 0; i < this.listHeight.length - 1; ++i) {
                let height1 = this.listHeight[i]
                let height2 = this.listHeight[i + 1]
                if (-y >= height1 && -y < height2) {
                    this.currentIndex = i
                    return
                }
            }

            this.currentIndex = this.listHeight.length - 2
        })
    }

    calculateHeight() {
        const list = this.$refs.listGroupRef as Element[]
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; ++i) {
            let item = list[i]
            height += item.clientHeight
            this.listHeight.push(height)
        }
    }

    gotoPlayList() {
        EventHub.FireEvent(EventType.PlayListEvent, true)
    }
}
</script>
<style lang="scss">
.singerlistview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .singerlistgroup {
        padding-bottom: 30px;
        .singerlistgroup-title {
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: 12px;
            color: hsla(0,0%,100%,.5);
            background: #333;
        }
        .singerlistgroup-item {
            display: flex;
            align-items: center;
            padding: 20px 0 0 30px;
            .singerlistgroup-itemavatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .singerlistgroup-itemname {
                margin-left: 20px;
                color: hsla(0,0%,100%,.5);
                font-size: 14px;
            }
        }
    }
}

.singerlist-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    .singerlist-shortcutitem {
        padding: 3px;
        line-height: 1;
        color: hsla(0,0%,100%,.5);
        font-size: 11px;
        &.singerlist-shortcutitemcurrent {
            color: #ffcd32;
        }
    }
}
</style>
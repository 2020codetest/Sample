<template>
  <div class="list-view" ref="listView">
    <ul>
      <li v-for="group in singers" class="list-group" :key="group.id" ref="listGroup">
        <span class="list-group-title">{{ group.title }}</span>
        <ul>
          <li v-for="item in group.items" class="list-group-item" :key="item.id">
            <img :src="item.avatar" class="avatar">
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li v-for="(item, index) in shortcutList"
        class="item"
        :data-index="index"
        :key="item.id"
        :class="{'current': currentIndex === index}"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import { SingerRepo } from "../model/Singer"
import { getMockSingerList } from "../mock/MockData"
import BetterScroll from "better-scroll"

@Component({name: "SingerListComponent"})
export default class SingerList extends Vue{
    shortcutList: string[] = []
    singers: SingerRepo[] = getMockSingerList()
    scrollY: number = 0
    currentIndex: number = 0
    scroll: BetterScroll|undefined = undefined
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
        this.scroll = new BetterScroll(this.$refs.listView as HTMLElement, {probeType: 3, click: true})
        this.scroll.on('scroll', (pos) => {
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
        const list = this.$refs.listGroup as Element[]
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; ++i) {
            let item = list[i]
            height += item.clientHeight
            this.listHeight.push(height)
        }
    }
}
</script>
<style lang="scss" scoped>
ul{
    padding: 0;
    margin: 0;
    border: 0;
}
.list-view {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .list-group {
        padding-bottom: 30px;
        .list-group-title {
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: 12px;
            color: hsla(0,0%,100%,.5);
            background: #333;
        }
        .list-group-item {
            display: flex;
            align-items: center;
            padding: 20px 0 0 30px;
            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .name {
                margin-left: 20px;
                color: hsla(0,0%,100%,.5);
                font-size: 14px;
            }
        }
    }
    .list-shortcut {
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
        font-family:Helvetica;
        .item {
            padding: 3px;
            line-height: 1;
            color: hsla(0,0%,100%,.5);
            font-size: 11px;
            &.current {
                color: #ffcd32;
                // font-weight: bold;
            }
        }
    }
}
</style>
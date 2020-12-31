<template>
    <li class="songlistwrap" @click="gotoPlayList()">
        <img class="songlistcover" :src="disc.cover" :alt="disc.title"/>
        <div class="songlistinfo">
            <span class="songlisttitle">{{disc.title}}</span>
            <span class="songlistdesc">{{disc.desc}}</span>
        </div>
    </li>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { EventHub, EventType } from "../../model/EventHub";
import { DiscItem } from "../../model/view/ViewData";

@Component({name: "SongList"})
export default class Disc extends Vue {
    @Prop()
    disc: DiscItem;
    mounted(){
    }

    gotoPlayList() {
        EventHub.FireEvent(EventType.PlayListEvent, true)
    }
}
</script>
<style lang="scss">
.songlistwrap{
    display: flex;
    flex-direction: row;
    padding: 0 20px 20px 20px;
    align-items: center;
    margin: 0;
    border: 0;
}

.songlistcover{
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.songlistinfo{
    flex: 1;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 20px;
}

.songlisttitle {
    margin-bottom: 10px;
    color: white;
}

.songlistdesc{
    color: hsla(0, 0%, 100%, .3);
}
</style>
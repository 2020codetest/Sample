<template>
    <div class="shortplayer">
        <div class="shortplayerstart">
            <img :src="data.cover" :alt="data.songname" class="shortplayercover playanimation"/>
            <div class="shortplayerstartinfo">
                <p class="shortplayerstarttitle">{{data.songname}}</p>
                <p class="shortplayerstartdesc">{{data.singer}}</p>
            </div>
        </div>
        <div class="shortplayerend">
            <div class="shortplayon"/>
            <div class="shortplaylist" />
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { getMockPlayData } from "../mock/MockData"
import { PlayData } from "../model/view/ViewData"

@Component({name: "ShortPlayer"})
export default class ShortPlayer extends Vue {
    data: PlayData = getMockPlayData()
    
}
</script>
<style lang="scss">
.shortplayer{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 400;
    background: #333;
    height: 60px;
}

.shortplayerstart{
    display: flex;
    align-items: center;
    flex: 1;
}

.shortplayercover{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px 0 20px;
}

.shortplayerstartinfo{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.shortplayerstarttitle{
    color: white;
    margin-bottom: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.shortplayerstartdesc{
    color: hsla(0, 0%, 100%, .3);
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

}

.shortplayerend{
    display: flex;
    align-items: center;
    font-size: 32px;
    color: rgba(255, 205, 49, .5);
    font-family: music-icon;
}

.shortplayon{
    padding: 0 10px;
}

.shortplayon::before{
    content: "\E90C";
}

.shortplaylist{
    padding: 0 10px;
}
.shortplaylist::before{
    content: "\E904";
}

</style>
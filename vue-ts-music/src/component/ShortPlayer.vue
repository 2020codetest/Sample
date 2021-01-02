<template>
    <div class="shortplayer">
        <div class="shortplayerstart">
            <img :src="data.cover" :alt="data.songname" class="shortplayercover" :class="{playanimation: state == 3}" @click="gotoFullPlayer()"/>
            <div class="shortplayerstartinfo">
                <p class="shortplayerstarttitle">{{data.songname}}</p>
                <p class="shortplayerstartdesc">{{data.singer}}</p>
            </div>
        </div>
        <div class="shortplayerend">
            <div :class="{shortplayon: state !== 3, shortplayoff: state === 3}" @click="clickPlay()"/>
            <div class="shortplaylist" />
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import { getMockPlayData } from "../mock/MockData"
import { EventData, EventHub, EventType } from "../model/EventHub"
import { PlayData } from "../model/view/ViewData"
import { Player, PlayerState } from "../play/Player"

let playUpdateCallback: (event: EventData) => void | undefined = undefined
@Component({name: "ShortPlayer"})
export default class ShortPlayer extends Vue {    
    data: PlayData = Player.getInstance().getPlayState().data
    state: PlayerState = PlayerState.stopped
    clickPlay() {
        Player.getInstance().onPlayClick()
    }

    mounted() {
        this.state = Player.getInstance().getPlayState().state
        playUpdateCallback = this.playUpdate.bind(this)
        EventHub.RegisterEvent(EventType.PlayEvent, playUpdateCallback)
    }

    destroyed() {
        EventHub.UnregisterEvent(EventType.PlayEvent, playUpdateCallback)
    }

    gotoFullPlayer() {
        EventHub.FireEvent(EventType.FullPlayerEvent, true)
    }

    playUpdate(event: EventData) {
        this.state = event.data.state
        this.data = event.data.data
    }
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
    z-index: 150;
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

.shortplayoff::before{
    content: "\E90B";
}

.shortplaylist{
    padding: 0 10px;
}
.shortplaylist::before{
    content: "\E904";
}

</style>
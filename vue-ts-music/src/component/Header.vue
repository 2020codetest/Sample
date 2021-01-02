<template>
    <header class="head">
        <img class="logo" :src= "require('../asset/logo.png')" alt="logo"/>
        <p class="title">Chicken Music</p>
        <div class="usrwrap" @click="showMySongList">
            <i class="usr"/>
        </div>
    </header>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import {EventHub, EventType} from "../model/EventHub"

@Component({name: "HeaderComponent"})
export default class Header extends Vue{
    mounted() {
        console.log("HeaderComponent loaded")
    }

    showMySongList() {
        EventHub.FireEvent(EventType.MySongListEvent, true)
    }
}
</script>
<style lang="scss">
.head{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 44px;
    width: 100%;
    position: relative;
}

.title {
    color: #ffcd32;
    text-align: center;
    font-size: 18px;
    line-height: 44px;
    display: block;
}

.logo{
    margin-right: 9px;
    width: 30px;
    height: 32px;
    display: block;
}

.usrwrap{
    position: absolute;
    top: 0;
    right: 0;
}

.usr{
    display: block;
    color: #ffcd32;
    font-size: 20px;
    padding: 12px;
    margin: 0;
}

.usr::before{
    font-family: music-icon;
    content: "\E912";
}
</style>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item in Items" :key="item.id" class="cover swiper-slide">
                <img class="coverimg" :src="item.cover" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script lang="ts">
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import {Vue, Component, Prop} from "vue-property-decorator"
import { CoverRecomendation } from "../model/Recommendation"

@Component({name: "CoverRecComponent"})
export default class CoverRec extends Vue{
    @Prop()
    Items: CoverRecomendation[];
    mounted(){
        new Swiper(".swiper-container", {
            direction: "horizontal",
            autoplay: {
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination'
            },
        })
    }
}
</script>
<style lang="scss">
.cover{
    margin: 0;
    padding: 0;
    border: 0;
    width: 100vw;
    height: 40vw;
}

.coverimg{
    object-fit: contain;
    width: 100vw;
    height: 40vw;
}

.swiper-container{
    width: 100vw;
    height: 40vw;
}

.swiper-wrapper{
    width: 100vw;
    height: 40vw;
}

.swiper-pagination-bullet {
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:  hsla(0, 0%, 100%, .5);
}

.swiper-pagination-bullet-active {
    display: inline-block;
    margin: 0 4px;
    width: 20px;
    height: 8px;
    border-radius: 5px;
    background:  hsla(0, 0%, 100%, .8);
    
}
</style>
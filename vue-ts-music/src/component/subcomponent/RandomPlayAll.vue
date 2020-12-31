<template>
    <div class="randomplayall" :style="{color: color, border: '1px solid ' + color}">
        <span class="randomplayalltxt">随机播放全部</span>
    </div>
</template>
<script lang="ts">

import {Vue, Component, Prop} from "vue-property-decorator"

@Component({name: "RandomPlayAll"})
export default class RandomPlayAll extends Vue {
    @Prop()
    color: string;
}
</script>
<style lang="scss">
.randomplayall{
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid hsla(0, 0%, 100%, .5);
    color: hsla(0, 0%, 100%, .5);
    border-radius: 100px;
    cursor: pointer;
}

.randomplayalltxt::before{
    content: "\E90C";
    font-family: music-icon;
    padding-right: 6px;
}

</style>
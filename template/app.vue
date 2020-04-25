<template>
    <div>
        <div>{{msg}}</div>
        <img :src="src"/>
    </div>
</template>
<script lang="ts">
    import Vue from "vue"
    export default class App extends Vue{
        msg: string = "hello world"
        src: string = require("./test.jpg")
    }
</script>
<style lang="scss" scoped>
</style>
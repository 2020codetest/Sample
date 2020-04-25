<template>
    <div>
        <div>{{msg}}</div>
        <img :src="src"/>
    </div>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Component} from "vue-property-decorator"
    @Component({name: "App"})
    export default class App extends Vue{
        msg: string = "hello world"
        src: string = require("./test.jpg")
    }
</script>
<style lang="scss" scoped>
</style>
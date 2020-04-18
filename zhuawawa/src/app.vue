<template>
    <div id="app" style="align-items:center;display:flex;flex-direction:column;">
        <button style="margin-top:20px;font-size:30px;" @click="btnClick" >{{btn}}</button>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator"
    import {AnimationControl} from "./model/AnimationControl"
    var animationControl: AnimationControl;
    @Component({ name: "App" })
    export default class App extends Vue{
        state: number = 0
        btn: string = "开始"
        btnClick() {
            if (this.state == 0){
                animationControl.start()
                this.btn = "抓娃娃"
                this.state = 1
            }
            else if (this.state == 1){
                animationControl.catch()
            }
        }

        stop() {
            this.btn = "重新开始"
            this.state = 0
        }

        mounted(){
            animationControl = new AnimationControl(this);
        }
    }
</script>
<style scoped lang="scss">
</style>
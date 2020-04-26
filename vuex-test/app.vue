<template>
    <div>
        <div class="red">{{msg}}</div>
        <img :src="src"/>
        <CompA />
        <CompB />
        <button @click="updateStore">Update store vie mutation</button>
        <button @click="updateStoreViaAction">Update store vie action</button>
        <button @click="updateModuleStoreViaMutation">Update module store vie mutation</button>
    </div>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Component} from "vue-property-decorator"
    import CompA from "./comp/CompA.vue"
    import CompB from "./comp/CompB.vue"

    @Component({name: "App", components: {CompA, CompB}})
    export default class App extends Vue{
        msg: string = "hello world"
        src: string = require("./test.jpg")
        updateStore(){
            this.$store.commit("updateTime", new Date().toString())
        }

        updateStoreViaAction() {
            this.$store.dispatch("updateTime")
        }

        updateModuleStoreViaMutation() {
            this.$store.commit("mymodule/update", 5)
        }
    }
</script>
<style lang="scss" scoped>
.red{
    color: red;
}
</style>
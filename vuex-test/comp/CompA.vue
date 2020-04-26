<template>
    <div>
        <div>{{storeValue}}</div>
        <div>{{moduleValue}}</div>
    </div>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Component} from "vue-property-decorator"
    import Vuex from "vuex"
    @Component({name: "CompA"})
    export default class CompA extends Vue{
        get storeValue() :string {
            return this.$store.state.time;
        }

        get moduleValue() : number {
            return this.$store.state.mymodule.count
        }
    }
</script>
<style lang="scss" scoped>
</style>
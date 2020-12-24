<template>
    <div class="test" @click="click">{{title}}</div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator"
    @Component({})
    export default class App extends Vue {
        title: string = "Hello World"
        mounted() {
            console.log("component mounted")
        }

        click() {
            this.title = `time now is ${new Date().toString()}`
        }
    }
</script>
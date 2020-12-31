import Vue from "vue"
import VueRouter from "vue-router"
import App from "./component/App.vue"
import {router} from "./route/Router"

Vue.use(VueRouter)
new Vue({
    router,
    render: h => h(App),
    el: "#root"
})
import Vue from "vue"
import Vuex from "vuex"
import App from "./app.vue"
Vue.use(Vuex)

import store from "./store"
new Vue({
    el: "#app",
    store,
    render: (h) => h(App)
})
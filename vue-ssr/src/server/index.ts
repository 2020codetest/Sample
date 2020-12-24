import App from "../comp/comp.vue"
import Vue from "vue"

function getContent() :Vue {
    return new Vue({render: h => h(App)})
}

module.exports = getContent
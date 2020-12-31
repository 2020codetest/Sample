import VueRouter from "vue-router"
import SingerListComponent from "../component/SingerList.vue"
import RecommendationComponent from "../component/Recommendation.vue"
import TopListComponent from "../component/TopList.vue"
import SearchComponent from "../component/Search.vue"
import MySonogListComponent from "../component/MySongList.vue"
import FullPlayerComponent from "../component/FullPlayer.vue"
import PlayListComponent from "../component/PlayList.vue"
export var router = new VueRouter({
    routes: [
        {
            path: '/', component: RecommendationComponent
        },
        {
            path: '/singer', component: SingerListComponent
        },
        {
            path: '/top', component: TopListComponent
        },
        {
            path: '/search', component: SearchComponent
        },
        {
            path: '/my', component: MySonogListComponent
        },
        {
            path: '/full', component: FullPlayerComponent
        },
        {
            path: '/list', component: PlayListComponent
        }
    ],
    mode: "history"
})
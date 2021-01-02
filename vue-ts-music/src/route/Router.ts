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
            path: '/', component: RecommendationComponent, meta: 0
        },
        {
            path: '/singer', component: SingerListComponent, meta: 1
        },
        {
            path: '/top', component: TopListComponent, meta: 2
        },
        {
            path: '/search', component: SearchComponent, meta: 3
        },
        {
            path: '/my', component: MySonogListComponent, meta: 0, name: "my"
        },
        {
            path: '/full', component: FullPlayerComponent, meta: 0, name: "player"
        },
        {
            path: '/list', component: PlayListComponent, meta: 0, name: "list"
        }
    ],
    mode: "hash"
})
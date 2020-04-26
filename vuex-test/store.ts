import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"
import {state} from "./state"
import mymodule from "./mymodule"

var initState: state = {time: "empty"}
export default new Vuex.Store<state>({
    state: initState,
    actions,
    mutations,
    modules: {
        mymodule
    }
})
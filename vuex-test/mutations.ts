import {state} from "./state"
import {MutationTree} from "vuex"

const mutations :MutationTree<state> = {
    updateTime(state: state, time: string){
        state.time = time
    }
}

export default mutations;
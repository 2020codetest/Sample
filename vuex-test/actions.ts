import Vuex, { Commit, ActionTree, Store, ActionContext } from "vuex";
import {state} from "./state"

const actions: ActionTree<state, state> = {
    updateTime(injection: ActionContext<state, state>): void {
        this.commit("updateTime", new Date().toString() + " action")
    }
}

export default actions;
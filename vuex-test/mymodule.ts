import Vuex, {MutationTree, ActionTree, Module, ActionContext} from "vuex"
import {state} from "./state"

export interface ModuleState{
    count: number;
}

var initState: ModuleState = {count: 9}
var mutations: MutationTree<ModuleState> = {
    update(state: ModuleState, cnt: number){
        state.count += cnt
    }
}

var actions: ActionTree<ModuleState, state> = {
    update(context: ActionContext<ModuleState, state>){
        context.state.count = context.state.count + context.rootState.time.length
    }
}

var module: Module<ModuleState, state> = {
    namespaced: true,
    state: initState,
    mutations,
    actions
}

export default module;
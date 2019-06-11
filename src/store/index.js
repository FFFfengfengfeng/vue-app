import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    num: 0
}

const getters = {
    getNum() {
        return state.num;
    }
}

const mutations = {
    add(state) {
        state.num ++;
    }
}

const actions = {
    add(context) {
        context.commit('add');
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
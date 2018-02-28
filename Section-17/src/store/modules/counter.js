import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
}

const mutations = {
    [types.MUTATE_COUNTER_INCREMENT]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUTATE_COUNTER_DECREMENT]: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    [types.COUNTER_INCREMENT]({ commit }, payload) {
        commit(types.MUTATE_COUNTER_INCREMENT, payload);
    },
    [types.COUNTER_DECREMENT]({ commit }, payload) {
        commit(types.MUTATE_COUNTER_DECREMENT, payload);
    },
    [types.COUNTER_INCREMENT_ASYNC]({ commit }, payload) {
        setTimeout(() => {
            commit(types.MUTATE_COUNTER_INCREMENT, payload.by);
        }, payload.duration);
    },
    [types.COUNTER_DECREMENT_ASYNC]({ commit }, payload) {
        setTimeout(() => {
            commit(types.MUTATE_COUNTER_DECREMENT, payload.by);
        }, payload.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
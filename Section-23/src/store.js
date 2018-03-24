import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios.auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    'AUTH_USER'(state, userData){
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signup({ commit }, authData){
      axios.post('/signupNewUser?key=AIzaSyBkuS_cp6M2zIbgoOYQvblJs_ePdwrUvpE', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('AUTH_USER', {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(err => console.log(err));
    },
    login({ commit }, authData){
      axios.post('/verifyPassword?key=AIzaSyBkuS_cp6M2zIbgoOYQvblJs_ePdwrUvpE', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('AUTH_USER', {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(err => console.log(err));
    }
  },
  getters: {

  }
})

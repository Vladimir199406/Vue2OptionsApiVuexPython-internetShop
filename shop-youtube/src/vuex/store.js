import Vue from 'vue'
import Vuex from 'vuex'

import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters"
//import createPersistedState from 'vuex-persistedstate';
//helps to avoid info fallback...

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters,
  //plugins: [createPersistedState()]
});

export default store;
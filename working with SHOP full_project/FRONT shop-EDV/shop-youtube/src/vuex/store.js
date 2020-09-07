import Vue from 'vue'
import Vuex from 'vuex'

import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters"
import createPersistedState from 'vuex-persistedstate';
//helps to avoid info fallback...

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    productsClothes: [],
    productsMobilesAndGudgets: [],
    productsBooks: [],
    productsTV: [],
    productsAudio: [],
    productsConsoles: [],
    productsGarden: [],
    cart: [],
    //Below is an object of user which would be created by form
    user: {
      username: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '' 
    },

    
  },
  mutations,
  actions,
  getters,
  //below is a plugin to save the state of the cart
  plugins: [createPersistedState({
    paths: ['cart']
  })]
});

export default store;
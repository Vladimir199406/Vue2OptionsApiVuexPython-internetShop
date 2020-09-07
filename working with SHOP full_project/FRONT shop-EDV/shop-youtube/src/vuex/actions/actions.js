export default {
  GET_SEARCH_VALUE_TO_VUEX ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_CLOTHES ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_CLOTHES', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_MOBILES_AND_GADGETS ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_MOBILES_AND_GADGETS', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_BOOKS ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_BOOKS', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_TV ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_TV', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_AUDIO ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_AUDIO', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_CONSOLES ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_CONSOLES', value)
  },
  GET_SEARCH_VALUE_TO_VUEX_GARDEN ({commit}, value) {
    commit('SET_SEARCH_VALUE_TO_VUEX_GARDEN', value)
  },
  SET_MOBILE({commit}) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP({commit}) {
    commit('SWITCH_DESKTOP')
  },
  ADD_TO_CART({commit}, product) {
    commit('SET_CART', product);
  },
  INCREMENT_CART_ITEM({commit}, index) {
    commit('INCREMENT', index)
  },
  DECREMENT_CART_ITEM({commit}, index) {
    commit('DECREMENT', index)
  },
  DELETE_FROM_CART({commit}, index) {
    commit('REMOVE_FROM_CART', index)
  }
}
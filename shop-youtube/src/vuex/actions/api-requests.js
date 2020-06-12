import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('http://localhost:3000/products', {
      method: "GET"
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
  GET_PRODUCTS_FROM_API_CLOTHES({commit}) {
    return axios('http://localhost:3000/clothes', {
      method: "GET"
    })
      .then((productsClothes) => {
        commit('SET_PRODUCTS_TO_STATE_CLOTHES', productsClothes.data);
        return productsClothes;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },

  GET_PRODUCTS_FROM_API_MOBILES_AND_GADGETS({commit}) {
    return axios('http://localhost:3000/mobilesAndGudgets', {
      method: "GET"
    })
      .then((productsMobilesAndGudgets) => {
        commit('SET_PRODUCTS_TO_STATE_MOBILES_AND_GADGETS', productsMobilesAndGudgets.data);
        return productsMobilesAndGudgets;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
 
  GET_PRODUCTS_FROM_API_BOOKS({commit}) {
    return axios('http://localhost:3000/books', {
      method: "GET"
    })
      .then((productsBooks) => {
        commit('SET_PRODUCTS_TO_STATE_BOOKS', productsBooks.data);
        return productsBooks;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },

  GET_PRODUCTS_FROM_API_TV({commit}) {
    return axios('http://localhost:3000/TV', {
      method: "GET"
    })
      .then((productsTV) => {
        commit('SET_PRODUCTS_TO_STATE_TV', productsTV.data);
        return productsTV;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },

  GET_PRODUCTS_FROM_API_AUDIO({commit}) {
    return axios('http://localhost:3000/audio', {
      method: "GET"
    })
      .then((productsAudio) => {
        commit('SET_PRODUCTS_TO_STATE_AUDIO', productsAudio.data);
        return productsAudio;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },

  GET_PRODUCTS_FROM_API_CONSOLES({commit}) {
    return axios('http://localhost:3000/consoles', {
      method: "GET"
    })
      .then((productsConsoles) => {
        commit('SET_PRODUCTS_TO_STATE_CONSOLES', productsConsoles.data);
        return productsConsoles;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },

  GET_PRODUCTS_FROM_API_GARDEN({commit}) {
    return axios('http://localhost:3000/garden', {
      method: "GET"
    })
      .then((productsGarden) => {
        commit('SET_PRODUCTS_TO_STATE_GARDEN', productsGarden.data);
        return productsGarden;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  }
}
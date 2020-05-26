export default {
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.searchValue = value;
  },
  SWITCH_MOBILE: (state) => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false;
    state.isDesktop = true;
  },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },

  SET_CART: (state, product) => {
    let item = state.cart.find(i => {
      if(i.idSize == product.idSize){
        i.quantity++;
        return i;
      }
    });
    if(!item){
     state.cart.push({
      image: product.image,
      name: product.name,
      price: product.price,
      article: product.article,
      selectedSize: product.selectedSize,
      idSize: product.idSize
     })
    }
  },

  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--
    }
  }
}
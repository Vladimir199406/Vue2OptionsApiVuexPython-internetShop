export default {
  SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_CLOTHES: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_MOBILES_AND_GADGETS: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_BOOKS: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_TV: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_AUDIO: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_CONSOLES: (state, value) => {
    state.searchValue = value;
  },
  SET_SEARCH_VALUE_TO_VUEX_GARDEN: (state, value) => {
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
  SET_PRODUCTS_TO_STATE_CLOTHES: (state, productsClothes) => {
    state.productsClothes = productsClothes;
  },
  SET_PRODUCTS_TO_STATE_MOBILES_AND_GADGETS: (state, productsMobilesAndGudgets) => {
    state.productsMobilesAndGudgets = productsMobilesAndGudgets;
  },
  SET_PRODUCTS_TO_STATE_BOOKS: (state, productsBooks) => {
    state.productsBooks = productsBooks;
  },
  SET_PRODUCTS_TO_STATE_TV: (state, productsTV) => {
    state.productsTV = productsTV;
  },
  SET_PRODUCTS_TO_STATE_AUDIO: (state, productsAudio) => {
    state.productsAudio = productsAudio;
  },
  SET_PRODUCTS_TO_STATE_CONSOLES: (state, productsConsoles) => {
    state.productsConsoles = productsConsoles;
  },
  SET_PRODUCTS_TO_STATE_GARDEN: (state, productsGarden) => {
    state.productsGarden = productsGarden;
  },
  SET_CART: (state, product) => {
    let item = state.cart.find(similarItem => {
      if(similarItem.idVariant == product.idVariant){
        similarItem.quantity++;
        return similarItem;
      }
    });
    if(!item){
     state.cart.push({
      //DO NOT FORGET TO PUSH ALL THE NEEDED DATA
      image: product.image,
      name: product.name,
      price: product.price,
      article: product.article,
      selectedColor: product.selectedColor,
      selectedSize: product.selectedSize,
      idVariant: product.idVariant,
      quantity: product.quantity
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
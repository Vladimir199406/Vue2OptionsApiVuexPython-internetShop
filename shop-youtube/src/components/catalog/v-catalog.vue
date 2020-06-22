<template>
  <div class='v-catalog'>
    <v-notification
        :messages="messages"
    />
      <router-link :to="{name: 'cart', params: {cart_data: CART}}">
        <keep-alive>
        <div class="v-catalog__link_to_cart"> <b-icon icon="cart2" font-scale="2"></b-icon> {{CART.length}}</div>
        </keep-alive>
      </router-link>
    <h1 class="catalogClassName">Catalog</h1>
    <div class="filters">
      <v-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
      <div class="range-slider" >
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
    </div>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
          @productClick="productClick"
      />
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'
  import vSelect from '../v-select'
  import vNotification from '../notifications/v-notification'
  export default {
    name: "v-catalog",
    components: {
      vCatalogItem,
      vSelect,
      vNotification
    },
    props: {},
    data() {
      return {
        //BELOW ARE VARIANTS OF CATEGORIES BY the "value" 
        // it is from vuex "value" == "state.searchValue" 
        //"state.searchValue" is in 'store.js'
        // REMEMBER about 'select' component
        categories: [
          {name: 'All products', value: 'All products'},
          {name: 'Men T-shirts', value: 'Men T-shirts'},
          {name: 'Women T-shirts', value: 'Women T-shirts'},
          {name: 'Big Screen phones', value: 'Big Screen phones'},
          {name: 'Little Screen phones', value: 'Little Screen phones'},
          {name: 'Novel', value: 'Novel'},
          {name: 'Detective', value: 'Detective'},
          {name: 'Classic literature', value: 'Classic literature'},
          {name: 'Big Screen TV 4K', value: 'Big Screen TV 4K'},
          {name: 'Big Screen TV 8K', value: 'Big Screen TV 8K'},
          {name: 'Economical variant TV', value: 'Economical variant TV'},
          {name: 'Audio system', value: 'Audio system'},
          {name: 'Loudspeakers', value: 'Loudspeakers'},
          {name: 'Headphones', value: 'Headphones'},
          {name: 'Not portable console', value: 'Not portable console'},
          {name: 'Portable consoles', value: 'Portable consoles'},
          {name: 'Bush cutting scissors', value: 'Bush cutting scissors'},
          {name: 'Watering hose', value: 'Watering hose'},
          {name: 'Shovel', value: 'Shovel'}
        ],
        selected: '',
        sortedProducts: [],
        minPrice: 0,
        maxPrice: 10000,
        messages: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_MOBILE',
        'IS_DESKTOP',
        'SEARCH_VALUE'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      productClick(article) {
        this.$router.push( {name: 'products', query: { 'products': article}})
      },
      setRangeSlider() {
        if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories(this.categories.va)
      },
      sortByCategories(category) {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS]
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.price >= vm.minPrice && item.price <= vm.maxPrice
        })
        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function (e) {
            vm.selected === category.name;
            return e.category === category.name
          })
        }
      },
      addToCart(data) {
        this.ADD_TO_CART(data)
          .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
              {name: 'PRODUCT WAS ADDED', id: timeStamp}
            )
          })
      },
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } 
        else {
          this.sortedProducts = this.PRODUCTS;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted() {
      if (!this.PRODUCTS.length){ 
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .catalogClassName{
    margin-bottom: 2%;
  }
  .v-catalog {
    color: #8f8f8f;
    width: 60%;
    margin-left: 31%;
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__link_to_cart {
      position: fixed;
      top: 80px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }

  .filters {
    margin-bottom: 2%;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
  }
  .v-select{
    background: white;
    margin-left: 3%;
  }
  .range-values{
    width: 200px;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 2%;
    background: white;
    border-radius: 20px;
    font-weight: 700;
  }
  .range-slider {
    width: 150px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }

  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>

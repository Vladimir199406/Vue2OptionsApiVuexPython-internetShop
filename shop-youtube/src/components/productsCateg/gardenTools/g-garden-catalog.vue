<template>
  <div class='g-gardenCatalog'>

    <v-notification
        :messages="messages"
    />
      <router-link :to="{name: 'cart', params: {cart_data: CART}}">
        <keep-alive>
        <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
        </keep-alive>
      </router-link>
    <h1 class="gGardenCatalogName">Garden tools catalog</h1>
    <div class="filters">
      <v-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
      <div class="range-slider">
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
      <gGardenItem
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
  import gGardenItem from './g-garden-catalog-item'
  import {mapActions, mapGetters} from 'vuex'
  import vSelect from '../../v-select'
  import vNotification from '../../notifications/v-notification'
  export default {
    name: "g-garden-catalog",
    components: {
      gGardenItem,
      vSelect,
      vNotification
    },
    props: {},
    data() {
      return {
        categories: [
          {name: 'Shovel', value: 'Shovel'},
          {name: 'Watering hose', value: 'Watering hose'},
          {name: 'Bush cutting scissors', value: 'Bush cutting scissors'}
        ],
        selected: 'Select category of garden tools',
        sortedProducts: [],
        minPrice: 0,
        maxPrice: 10000,
        messages: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS_GARDEN',
        'CART',
        'IS_MOBILE',
        'IS_DESKTOP',
        'SEARCH_VALUE_GARDEN'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS_GARDEN
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API_GARDEN',
        'ADD_TO_CART'
      ]),
      productClick(article) {
        this.$router.push( {name: 'productsGarden', query: { 'productsGarden': article}})
      },
      setRangeSlider() {
        if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories()
      },
      sortByCategories(category) {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS_GARDEN]
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
              {name: 'PRODUCT WAS ADDED', icon: 'ok', id: timeStamp}
            )
          })
      },
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS_GARDEN]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS_GARDEN;
        }
      }
    },
    watch: {
      SEARCH_VALUE_GARDEN() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE_GARDEN);
      }
    },
    mounted() {
      if (!this.PRODUCTS_GARDEN.length){ 
      this.GET_PRODUCTS_FROM_API_GARDEN()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE_GARDEN)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .gGardenCatalogName{
    margin-bottom: 2%;
  }
  .g-gardenCatalog {
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
    border-radius: 7px;
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

<template>
  <div class='v-cart'>
      <router-link :to="{name: 'catalog'}">
        <keep-alive>
        <div class="v-catalog__link_to_cart">Catalog</div>
        </keep-alive>
      </router-link>
    <h1 class="cartName">Cart</h1>
    <p v-if="!cart_data.length" class="pText">There are no products in cart...</p>
    <v-cart-item class="cardItem"
        v-for="(item, index) in cart_data"
        :key="item.idVariant"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{cartTotalCost | toFix}}</p>
    </div>
  </div>
</template>

<script>
  import vCartItem from './v-cart-item'
  import toFix from "../../filters/toFix"
  import {mapActions} from 'vuex'
  export default {
    name: "v-cart",
    components: {
      vCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix
    },
    computed: {
      cartTotalCost() {
        let result = []
        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style lang="scss">
  .cartName{
    margin-left: 20%;
    margin-bottom: 2%;
  }
  .pText{
    margin-left: 21%;
  }
  .v-cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      color: #ffffff;
      font-size: 20px;
    }
    .total__name {
      margin-right: $margin*2;
      margin-left: 20%;
    }
  }
  .v-catalog__link_to_cart
  {
    border-radius: 10px;
    background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    color: white;
    font-weight: 600;
    margin-top: 27.3%;
    width: 4%;
  }
  .cardItem{
    width: 56%;
    margin-left: 31.5%;
    border-radius: 20px;
    margin-bottom: 2%;
  }
</style>
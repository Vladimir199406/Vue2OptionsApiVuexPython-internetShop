<template>
  <div class='v-cart-item'>
    <img class="v-cart-item__image" :src=" require('../../assets/images/DefaultColorProducts/' + cart_item_data.image[0]) " alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price | toFix}}</p>
      <p>{{cart_item_data.article}}</p>
      <p>{{cart_item_data.selectedColor}}</p>
      <p>{{cart_item_data.selectedSize}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <!--<p>Qty:</p>-->
      <div class="quantity__tools">
        <span class="quantity__btn" @click="decrementItem">
          <b-icon icon = "cart-dash" font-scale="1.5" style="color: #1E90FF"></b-icon>
        </span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">
          <b-icon icon = "cart-plus" font-scale="1.5" style="color: #1E90FF"></b-icon>
        </span>
      </div>
    </div>
    <button @click="deleteFromCart" class="deleteBTN">
      <b-icon icon = "trash-fill" font-scale="1.5"></b-icon>
    </button>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
  export default {
    name: "v-cart-item",
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix
    },
    computed: {},
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }
</script>

<style lang="scss">
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      max-width: 50px;
    }
    .quantity__btn {
      cursor: pointer;
      font-weight: 700;
    }
    .quantity__tools {
      cursor: pointer;
      font-weight: 700;
      position: relative;
    }
  }
  .deleteBTN{
    cursor: pointer;
    background: rgb(247, 9, 49);
    font-weight: 700;
    border-radius: 10px;
    height: 20%;
    color: #4d4b4b;
  }
</style>
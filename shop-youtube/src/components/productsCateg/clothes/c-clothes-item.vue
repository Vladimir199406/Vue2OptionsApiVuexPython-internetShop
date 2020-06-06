<template>
<!--BELOW, REMEMBER!-->
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class='v-catalog-item'>

    <v-popup
        v-if="isInfoPopupVisible" 
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
    >

      <!--BELOW IS A FORM OF PICTURE CHANGE-->
      <div>
        <div style="display:flex; justify-content: space-around; align-items: center; width: 100%">
          <label v-for="sideToChoose in $options.sideNameOfProduct" 
                :key="sideToChoose" 
                style="margin-right: 2rem"
          >
              <input 
                  type="radio" 
                  :value="sideToChoose" 
                  v-model="selectedSide"
                  class="radio-buttons"
              >
              {{sideToChoose}}
          </label>
        </div>
        <span v-if="selectedSide == 'Front' ">
          <img :src="sideImageFront" 
              :alt="selectedSide"
              class="popupImage"
        >
        </span>
        <span v-if="selectedSide == 'Back' ">
          <img :src="sideImageBack" 
              :alt="selectedSide"
              class="popupImage"
          >
        </span>
        <span v-if="selectedSide == 'Left' ">
          <img :src="sideImageLeftSide" 
              :alt="selectedSide"
              class="popupImage"
          >
        </span>
        <span v-if="selectedSide == 'Right' ">
          <img :src="sideImageRightSide" 
              :alt="selectedSide"
              class="popupImage"
          >
        </span>
      </div>
      <!--<img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">-->
      <!--ABOVE IS A FORM OF PICTURE CHANGE-->

      <!--<img class="v-catalog-item__image" :src=" require('../../../assets/images/' + product_data.image) " alt="img">-->
      <div>

        <!--BELOW IS A GLOBAL PRODUCT RATING FORM-->
        <div class="rateGlobal">
          Total rate: 
          <b-form-rating 
            v-model = "valueTotalOfProduct" 
            readonly 
            precision = "2" 
            >
            </b-form-rating > 
          <!--<p  class = "mt-2 " > Global : {{valueTotalOfProduct}} </p> -->
        </div >
        <!--ABOVE IS A GLOBAL PRODUCT RATING FORM-->

        <p class="v-catalog-item__name">Article: {{product_data.article}}</p>
        <p class="v-catalog-item__price">Price: {{product_data.price | toFix}} Р.</p>
        <p class="v-catalog-item__price">Category: {{product_data.category}}</p>
        
        <!--BELOW IS A PERSONAL RATING FORM-->
        <div>You rate:
          <b-form-rating  v-model="valuePersonal" 
                          variant="warning" 
                          color = "gold" 
                          show-clear icon-clear = "slash-circle"
                          class="mb-2">        
          </b-form-rating>
          <!--<p class="mt-2">Value: {{ value }}</p>-->
        </div>
        <!--ABOVE IS A PERSONAL RATING FORM-->

        <!--BELOW IS A DESICION FOR AN OPTION OF A PRODUCT-->
        <div class="selectVariant">
          Select: 
          <select v-model="selectedSize" class="selectWindow">
            <option disabled value="">Select variant:</option>
            <option v-for="(size, index) in sizes" 
              v-bind:value="size.value" 
              v-bind:key="size.text"
              v-if="product_data.sizesNumber[index] != '0'"
            >
                {{ size.value }}
            </option>
          </select>          
        </div>
      </div>
      <span>{{selectedSizeChange()}} {{selectedSizeChangeAddToProductData()}}</span>
    </v-popup>
    <!--BELOW IS POPUP WHEN OPTION IS NOT SELECTED-->
     <v-alert-popup
      v-if="isAlertPopupVisible"
      @closeAlert="closeAlertPopupInfo"
     >
     </v-alert-popup>
    <img class="v-catalog-item__image" :src=" require('../../../assets/images/' + product_data.image[0]) " alt="img" >
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price | toFix}}</p>
    <button
        class="v-catalog-item__show-info"
        @click="showPopupInfo"
    >
      Show info
    </button>
    <br>
    <!--<button 
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Add to cart
    </button>-->
  </div>
</template>

<script>
  import vPopup from '../../popup/v-popup'
  import vAlertPopup from '../../popup/v-alert-popup'
  import toFix from '../../../filters/toFix'
  export default {
    name: "c-clothes-item",
    components: {
      vPopup,
      vAlertPopup
    },

    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      },
      
    },
    data() {
      return {
        pictures: this.product_data.image,
        selectedSide: "Front",
        valuePersonal: null,
        valueTotalOfProduct: 0.00,
        isInfoPopupVisible: false,
        isAlertPopupVisible: false,
        selectedSize: 'NOPE',
        sizes: [
          {value: this.product_data.sizesStock[0]},
          {value: this.product_data.sizesStock[1]},
          {value: this.product_data.sizesStock[2]},
          {value: this.product_data.sizesStock[3]},
          {value: this.product_data.sizesStock[4]},
          {value: this.product_data.sizesStock[5]}
        ]
      }
    },
    filters: {
      toFix
    },
    computed: {
        sideImageFront(picture) {
         picture =  this.pictures[0];
         return require(`../../../assets/images/${picture}`);
        },
        sideImageBack(picture) {
         picture =  this.pictures[1];
         return require(`../../../assets/images/${picture}`);
        },
        sideImageLeftSide(picture) {
         picture =  this.pictures[2];
         return require(`../../../assets/images/${picture}`);
        },
        sideImageRightSide(picture) {
         picture =  this.pictures[3];
         return require(`../../../assets/images/${picture}`);
        }
    },
    sideNameOfProduct: ["Front", "Back", "Left", "Right"],
    methods: {
      selectedSizeChangeAddToProductData: function(){
        this.product_data.selectedSize = this.selectedSize;
        this.product_data.idVariant = this.product_data.article + this.product_data.selectedSize;
      },
      selectedSizeChange: function(){
        console.log(this.selectedSize);
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
      showAlertPopupInfo(){
        this.isAlertPopupVisible = true;
      },
      closeAlertPopupInfo(){
        this.isAlertPopupVisible = false;
      },
      addToCart() {
        if(this.selectedSize != 'NOPE'){
        this.$emit('addToCart', this.product_data);
        //console.log(this.product_data.idVariant)
        }
        else{
          this.showAlertPopupInfo()
        }
      }
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    border-radius: 20px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    &__image {
      width: 100px;
      height: 100px;
       border-radius: 10px;
    }
  }
  .v-catalog-item__show-info{
    color: white;
    border-radius: 5px;
    cursor: pointer;
    background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
  }
  .v-catalog-item__add_to_cart_btn{
    color: white;
    margin-top: 5%;
    border-radius: 10px;
    cursor: pointer;
    background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
  }
  .selectVariant{
    margin-top: 8%;
  }
  .selectWindow{
    border-radius: 10px;
    cursor: pointer;
  }
  .sizeInStockH2{
    font-weight: 700;
  }
  button{
    cursor: pointer;
  }
  .mb-2{
    cursor: pointer;
    padding-left: 10px;
  }
  .rateGlobal{
    margin-top: 20px;
  }
</style>

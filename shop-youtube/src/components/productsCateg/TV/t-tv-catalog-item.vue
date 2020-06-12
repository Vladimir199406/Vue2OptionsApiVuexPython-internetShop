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
          <img :src="returningVariantOfProductPrictureFront()" 
              :alt="selectedSide"
              class="popupImage"
        >
        </span>
        <span v-if="selectedSide == 'Back' ">
          <img :src="returningVariantOfProductPrictureBack()" 
              :alt="selectedSide"
              class="popupImage"
          >
        </span>
        <span v-if="selectedSide == 'Left' ">
          <img :src="returningVariantOfProductPrictureLeft()" 
              :alt="selectedSide"
              class="popupImage"
          >
        </span>
        <span v-if="selectedSide == 'Right' ">
          <img :src="returningVariantOfProductPrictureRight()" 
              :alt="selectedSide"
              class="popupImage"
          >
        </span>
      </div>
      <!--ABOVE IS A FORM OF PICTURE CHANGE-->
  
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
          <!--ABOVE IS A GLOBAL PRODUCT RATING FORM-->
          </div >

        <!--BELOW IS A MAIN BLOCK OF INFO-->
        <p class="v-catalog-item__name">Article: {{product_data.article}}</p>
        <p class="v-catalog-item__price">Price: {{product_data.price | toFix}} Р.</p>
        <p class="v-catalog-item__price">Category: {{product_data.category}}</p>
        <p class="v-catalog-item__price" v-if="product_data.type == 'mobilesAndGadgets'">Screen: {{product_data.screen}}</p>
        <p class="v-catalog-item__price" v-if="product_data.type == 'mobilesAndGadgets'">Battery: {{product_data.batteryCapacity}}</p>
        <p class="v-catalog-item__price" v-if="product_data.type == 'mobilesAndGadgets'">Memory: {{product_data.memory}}</p>
        <p class="v-catalog-item__price" v-if="product_data.type == 'mobilesAndGadgets'">Camera: {{product_data.camera}}</p>
        <!--ABOVE IS A MAIN BLOCK OF INFO-->
        
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


        <!--BELOW IS A DESICION FOR A COLOR OF A PRODUCT-->
        <div class="selectVariant">
          Select color of product: 
          <select v-model="selectedColor" class="selectWindow">
            <option disabled value="">Select variant:</option>
            <option v-for="(color, index) in colors" 
              v-bind:value="color.value" 
              v-bind:key="color.text"
              v-if="product_data.variantsNumber[index] != '0'"
            >
                {{ color.value }}
            </option>
          </select>          
        </div>
        <!--ABOVE IS A DESICION FOR A COLOR OF A PRODUCT-->


      </div>
      <span>{{selectedColorChange()}} {{selectedColorChangeAddToProductData()}}</span>
    </v-popup>
    <!--BELOW IS POPUP WHEN OPTION IS NOT SELECTED-->
     <v-alert-popup
      v-if="isAlertPopupVisible"
      @closeAlert="closeAlertPopupInfo"
     >
     </v-alert-popup>
    <img class="v-catalog-item__image" :src=" require('../../../assets/images/DefaultColorProducts/' + product_data.image[0]) " alt="img" >
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price | toFix}}</p>
    <button
        class="v-catalog-item__show-info"
        @click="showPopupInfo"
    >
      Show info
    </button>
    <br>
  </div>
</template>

<script>
  import vPopup from '../../popup/v-popup'
  import vAlertPopup from '../../popup/v-alert-popup'
  import toFix from '../../../filters/toFix'
  export default {
    name: "tTVCatalogItem",
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
        selectedSize:"NOPE",
        valuePersonal: null,
        valueTotalOfProduct: 0.00,
        isInfoPopupVisible: false,
        isAlertPopupVisible: false,
        selectedColor: 'NOPE',
        colors: [
          {value: this.product_data.colorsStock[0]},
          {value: this.product_data.colorsStock[1]},
          {value: this.product_data.colorsStock[2]},
          {value: this.product_data.colorsStock[3]},
          {value: this.product_data.colorsStock[4]},
          {value: this.product_data.colorsStock[5]},
          {value: this.product_data.colorsStock[6]}
        ]
      }
    },
    filters: {
      toFix
    },
    computed: {},
    sideNameOfProduct: ["Front", "Back", "Left", "Right"],
    methods: {
      returningVariantOfProductPrictureFront: function(){
        if(this.selectedColor == 'NOPE'){
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[0])
        }
        else if(this.selectedColor == "Black"){
           return require(`../../../assets/images/BlackColorProducts/` + this.pictures[0])
        }
        else if(this.selectedColor == "White"){
           return require(`../../../assets/images/WhiteColorProducts/` + this.pictures[0])
        }
        else if(this.selectedColor == "Grey"){
           return require(`../../../assets/images/GreyColorProducts/` + this.pictures[0])
        }
         else if(this.selectedColor == "Red"){
           return require(`../../../assets/images/RedColorProducts/` + this.pictures[0])
        }
         else if(this.selectedColor == "Blue"){
           return require(`../../../assets/images/BlueColorProducts/` + this.pictures[0])
        }
         else if(this.selectedColor == "Yellow"){
           return require(`../../../assets/images/YellowColorProducts/` + this.pictures[0])
        }
         else if(this.selectedColor == "Green"){
           return require(`../../../assets/images/GreenColorProducts/` + this.pictures[0])
        }
         else{
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[0])
        }
      },
      returningVariantOfProductPrictureBack: function(){
        if(this.selectedColor == 'NOPE'){
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[1])
        }
        else if(this.selectedColor == "Black"){
           return require(`../../../assets/images/BlackColorProducts/` + this.pictures[1])
        }
        else if(this.selectedColor == "White"){
           return require(`../../../assets/images/WhiteColorProducts/` + this.pictures[1])
        }
         else if(this.selectedColor == "Grey"){
           return require(`../../../assets/images/GreyColorProducts/` + this.pictures[1])
        }
        else if(this.selectedColor == "Red"){
           return require(`../../../assets/images/RedColorProducts/` + this.pictures[1])
        }
         else if(this.selectedColor == "Blue"){
           return require(`../../../assets/images/BlueColorProducts/` + this.pictures[1])
        }
         else if(this.selectedColor == "Yellow"){
           return require(`../../../assets/images/YellowColorProducts/` + this.pictures[1])
        }
         else if(this.selectedColor == "Green"){
           return require(`../../../assets/images/GreenColorProducts/` + this.pictures[1])
        }
        else{
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[1])
        }
      },
      returningVariantOfProductPrictureLeft: function(){
        if(this.selectedColor == 'NOPE'){
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[2])
        }
        else if(this.selectedColor == "Black"){
           return require(`../../../assets/images/BlackColorProducts/` + this.pictures[2])
        }
        else if(this.selectedColor == "White"){
           return require(`../../../assets/images/WhiteColorProducts/` + this.pictures[2])
        }
         else if(this.selectedColor == "Grey"){
           return require(`../../../assets/images/GreyColorProducts/` + this.pictures[2])
        }
         else if(this.selectedColor == "Red"){
           return require(`../../../assets/images/RedColorProducts/` + this.pictures[2])
        }
         else if(this.selectedColor == "Blue"){
           return require(`../../../assets/images/BlueColorProducts/` + this.pictures[2])
        }
         else if(this.selectedColor == "Yellow"){
           return require(`../../../assets/images/YellowColorProducts/` + this.pictures[2])
        }
         else if(this.selectedColor == "Green"){
           return require(`../../../assets/images/GreenColorProducts/` + this.pictures[2])
        }
         else{
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[2])
        }
      },
      returningVariantOfProductPrictureRight: function(){
        if(this.selectedColor == 'NOPE'){
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[3])
        }
        else if(this.selectedColor == "Black"){
           return require(`../../../assets/images/BlackColorProducts/` + this.pictures[3])
        }
        else if(this.selectedColor == "White"){
           return require(`../../../assets/images/WhiteColorProducts/` + this.pictures[3])
        }
        else if(this.selectedColor == "Grey"){
           return require(`../../../assets/images/GreyColorProducts/` + this.pictures[3])
        }
         else if(this.selectedColor == "Red"){
           return require(`../../../assets/images/RedColorProducts/` + this.pictures[3])
        }
         else if(this.selectedColor == "Blue"){
           return require(`../../../assets/images/BlueColorProducts/` + this.pictures[3])
        }
         else if(this.selectedColor == "Yellow"){
           return require(`../../../assets/images/BlueColorProducts/` + this.pictures[3])
        }
         else if(this.selectedColor == "Green"){
           return require(`../../../assets/images/GreenColorProducts/` + this.pictures[3])
        }
         else{
          return require(`../../../assets/images/DefaultColorProducts/` + this.pictures[3])
        }
      },
      //ABOVE IS A SCRIPT TO RETURN BLACK COLOR VARIANTS OF PRODUCTS


      selectedColorChangeAddToProductData: function(){
        this.product_data.selectedColor = this.selectedColor;
        this.product_data.idVariant = this.product_data.article + this.product_data.selectedColor;
      },
      selectedColorChange: function(){
        console.log(this.selectedColor);
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
          if(this.selectedColor != 'NOPE'){
            this.$emit('addToCart', this.product_data);
          }
          else{
            this.showAlertPopupInfo()
          }
      },
      selectedSizeShow: function(){
        console.log(this.selectedSize)
      }
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    font-weight: 700;
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
  .popupImage{
    width: 160px;
    height: 150px;
    padding-left: 20%;
    padding-top: 20px;
    border-radius: 20px;
  }
  .radio-buttons{
    cursor: pointer;
  }
  .selectSizeBlock{
    margin-right: 2rem;
  }
  .radio-buttons-size{
    cursor: pointer;
    margin-bottom: 8%;

  }
  .selectSize{
    margin-top: 8%;
  }
</style>

<template>
  <div class="popup_wrapper_alert">
    <div class='v-popup_alert'>
      <div class="textMessage">
      Sorry, but you you have forgotten to select a variant of a product. Please be careful next time before clicking "Add to cart" button.
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal_alert" @click="closeAlert">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-alert-popup",
    data() {
      return {}
    },
    methods: {
      closeAlert() {
        this.$emit('closeAlert')
      }
    },
  }
</script>

<style>
  .popup_wrapper_alert {

    margin-left: 21%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .v-popup_alert {
    font-weight: 700;
    text-align: justify;
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background: #ffffff;
    background-image: url(../../assets/EDV-logo.jpg);
    background-size: 100px 60px;
    background-repeat: no-repeat;
    box-shadow: 0 0 17px 0 #e7e7e7;
    border-radius: 20px;
    z-index: 10;
  }
  .textMessage{
    margin: 10%;
    margin-top: 15%;
  }
  .close_modal_alert {   
      padding: 8px;
      color: #ffffff;
      background: red;
      border-radius: 10px;
      cursor: pointer;
    }
</style>

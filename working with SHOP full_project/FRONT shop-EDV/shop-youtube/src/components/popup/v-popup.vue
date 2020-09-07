<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class='v-popup'>
      <div class="v-popup__header">
        <span class="popupTitle">{{popupTitle}}</span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">
          <b-icon icon="door-closed-fill" font-scale="1.5"></b-icon>
        </button>
        <button
            class="submit_btn"
            @click="rightBtnAction"
        >
          {{rightBtnTitle}}
          <b-icon icon="cart-plus" font-scale="2"></b-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-popup",
    props: {
      popupTitle: {
        type: String,
        default: 'Popup name'
      },
      rightBtnTitle: {
        type: String,
        default: 'Ok'
      }
    },
    data() {
      return {}
    },
    methods: {
      rightBtnAction() {
        this.$emit('rightBtnAction')
      },
      closePopup() {
        this.$emit('closePopup')
      }
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopup()
        }
      })
    },
  }
</script>

<style lang="scss">
  .popupTitle{
    background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    color:white;
    border-radius: 10px;
    font-size: 100%;
  }
  .popup_wrapper {
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
  .v-popup {
    text-align: left;
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 540px;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    border-radius: 20px;
    z-index: 10;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn {
      padding: 8px;
      color: #ffffff;
      background: #26ae68;
      border-radius: 10px;
      cursor: pointer;
    }
    .close_modal {
      padding: 8px;
      color: #ffffff;
      background: red;
      border-radius: 10px;
      cursor: pointer;
    }
  }
</style>

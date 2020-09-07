<template>
  <div class='v-notification'>
    <transition-group
        name="v-transition-animate"
        class="messages_list"
    >
      <div
          class="v-notification__content"
          v-for="message in messages"
          :key="message.id"
          :class="message.icon"
      >
        <div class="content__text">
          <span>{{message.name}}</span>
          <b-icon icon="chat-square-dots-fill" font-scale="2"></b-icon>
        </div>
        <div class="content_buttons">
          <button v-if="rightButton.length">{{rightButton}}</button>
          <button v-if="leftButton.length">{{leftButton}}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "v-notification",
    props: {
      messages: {
        type: Array,
        default: () => {
          return []
        }
      },
      rightButton: {
        type: String,
        default: ''
      },
      leftButton: {
        type: String,
        default: ''
      },
      timeout: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {}
    },
    methods: {
      hideNotification() {
        let vm = this;
        if (this.messages.length) {
          setTimeout(function () {
            vm.messages.splice(vm.messages.length - 1, 1)
          }, vm.timeout)
        }
      }
    },
    watch: {
      messages() {
        this.hideNotification()
      }
    },
    mounted() {
      this.hideNotification()
    }
  }
</script>

<style lang="scss" scoped>
  .v-notification {
    position: fixed;
    top: 180px;
    right: 16px;
    z-index: 10;
    &__messages_list {
      display: flex;
      flex-direction: column-reverse;
    }
    &__content {
      padding: 16px;
      border-radius: 20px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-bottom: 16px;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      &.error {
        background: red;
      }
      &.warning {
        background: orange;
      }
    }
    .content {
      &__text {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    border-radius: 30px;
  }

  .v-transition-animate {
    &-enter {
      transform: translateX(120px);
      opacity: 0;
    }
    &-enter-active {
      transition: all .6s ease;
    }
    &-enter-to {
      opacity: 1;
    }

    &-leave {
      height: 50px;
      opacity: 1;
    }
    &-leave-active {
      transition: transform .3s ease, opacity .3s, height .3s .2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(120px);
      opacity: 0;
    }

    &-move {
      transition: transform .3s ease;
    }

  }
</style>

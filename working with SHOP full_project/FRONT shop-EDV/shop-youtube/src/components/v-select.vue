<template>
  <div class='v-select'>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >
      {{selected}}
      <b-icon icon="file-arrow-down" font-scale="3"></b-icon>
      <b-icon icon="collection-fill" font-scale="4"></b-icon>
    </p>
    <div
        class="options"
        v-if="areOptionsVisible || isExpanded"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="pOption"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-select",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      },
      isExpanded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option)
        this.areOptionsVisible = false;
      },
      hideSelect() {
        this.areOptionsVisible = false;
      }
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style>
  .v-select {
    position: relative;
    width: 150px;
    cursor: pointer;
    text-align: left;
    text-align: center;
    font-weight: 700;
  }
  .title {
    border: solid 1px #aeaeae;
    padding: 8px;
  }
  .v-select p {
    margin: 0;
    border-radius: 5px;
  }

  .pOption{
    padding-top:10px;
    font-weight: 500;
  }

  .options {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 133px;
    padding: 8px;
    border-radius: 0px 0px 10px 10px;
  }

  .options p:hover {
    background: #e7e7e7;
  }
</style>
<template>
  <div>
        <keep-alive>
          <div id="app">
            <v-header/>     
            <router-view></router-view> 
          </div>
        </keep-alive>
  </div>
</template>

<script> 
  import vHeader from './components/layouts/v-header'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'app',
    components:{
      vHeader
    },
       computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        vm.SET_DESKTOP()
        console.log('Desktop',vm.IS_DESKTOP)
      } else {
        vm.SET_MOBILE()
        console.log('Mobile',vm.IS_MOBILE)
      }
    })
  }
}
</script>

<style>

#app {
  margin-top: 3%;
}
</style>

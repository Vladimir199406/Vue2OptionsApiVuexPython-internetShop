<template>
  <div>
        <keep-alive>
          <div id="app">
            <mainPage></mainPage>
            <v-header/>     
            <router-view></router-view> 
          </div>
        </keep-alive>
  </div>
</template>

<script>
  import mainPage from './components/mainPage/mainPage' 
  import vHeader from './components/layouts/v-header'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'app',
    components:{
     mainPage,
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
.homeDirectory{
  margin-top: 5%;
  margin-right: 80%;
  height:60px;
  width: 10%;
  border: solid 2px gray;
  border-radius: 10px;
  font-weight: 700;
  color: black;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3%;
}
</style>

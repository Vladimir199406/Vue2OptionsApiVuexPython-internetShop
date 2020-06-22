<template>
  <div class='v-header'>
                <aside>
                  <nav>
                      <div class="heading">
                        <div>
                        </div>
                        <div class="search-field">
                            <input
                                type="text"
                                v-model="searchValue" 
                                placeholder="Please, enter Your request"
                            >
                            <button class="search_btn" @click="search(searchValue)">
                              <i class="material-icons">
                                <b-icon icon="search" font-scale="2"></b-icon>
                              </i>
                            </button>
                            
                        </div>
                        <button class="canselSearchBTN" @click="clearSearchField">
                              <i class="material-icons" >
                                <b-icon icon="eye-slash" font-scale="2"></b-icon> 
                                <b-icon icon="search" font-scale="1.3"></b-icon>
                              </i>
                        </button>
                        <!--BELOW IS AN IMPORTANT ELEMENT OF DYNAMICLY SEARCH-->
                        <span v-if="search(searchValue)"></span>
                        <!--BELOW IS AN IMPORTANT ELEMENT OF DYNAMICLY SEARCH-->
                      </div>
                      <ul class="aside-menu">
                          <li v-on:click.prevent="activeLink = 1" v-bind:class="{activeFirst: activeLink === 1}" @click="clearSearchField"><router-link to="/Home"><b-icon icon="house-door" font-scale="3" ></b-icon></router-link></li>
                          <li v-on:click.prevent="activeLink = 2" v-bind:class="{active: activeLink === 2}" @click="clearSearchField"><router-link to="/clothes"><p class="catalogPtext">CLOTHES</p></router-link></li>
                          <li v-on:click.prevent="activeLink = 3" v-bind:class="{active: activeLink === 3}" @click="clearSearchField"><router-link to="/mobilesAndGadgets"><p class="catalogPtext">MOBILES AND GADGETS</p></router-link></li>
                          <li v-on:click.prevent="activeLink = 5" v-bind:class="{active: activeLink === 5}" @click="clearSearchField"><router-link to="/books"><p class="catalogPtext">BOOKS</p></router-link></li>
                          <li v-on:click.prevent="activeLink = 6" v-bind:class="{active: activeLink === 6}" @click="clearSearchField"><router-link to="/TV"><p class="catalogPtext">TV</p></router-link></li>
                          <li v-on:click.prevent="activeLink = 7" v-bind:class="{active: activeLink === 7}" @click="clearSearchField"><router-link to="/audio"><p class="catalogPtext">AUDIO</p></router-link></li>
                          <li v-on:click.prevent="activeLink = 8" v-bind:class="{active: activeLink === 8}" @click="clearSearchField"><router-link to="/consoles"><p class="catalogPtext">CONSOLES</p></router-link></li>
                          <li v-on:click.prevent="activeLink = 9" v-bind:class="{activeLast: activeLink === 9}" @click="clearSearchField"><router-link to="/garden"><p class="catalogPtext">GARDEN TOOLS</p></router-link></li>                    
                      </ul>
                  </nav>
                </aside>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "v-header",
    props: {},
    data() {
      return {
        activeLink: 1,
        searchValue: '',
      }
    },
    computed: {
      ...mapGetters([
        'SEARCH_VALUE',
        'SEARCH_VALUE_CLOTHES'
      ])
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX',
        'GET_SEARCH_VALUE_TO_VUEX_CLOTHES'
      ]),
      search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
        this.GET_SEARCH_VALUE_TO_VUEX(value);
      },
      clearSearchField() {
        this.searchValue = '';
        this.GET_SEARCH_VALUE_TO_VUEX();
        this.GET_SEARCH_VALUE_TO_VUEX_CLOTHES();
      }
    }
  }
</script>

<style lang="scss">
  input{
    height: 27px;
    border-radius: 10px 0 0 10px;
  }
  .canselSearchBTN{
      margin-left: 65%;
      background: transparent;
      margin-top: 1px;
      margin-bottom: 3%;
      color: white;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      border: none;
      border-radius: 6px;
      height: 32px;
      font-weight: 700;
      font-family: sans-serif;
      cursor: pointer;
  }

  .v-header {
    color: white3;
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: fixed;
    width: 20%;
    top: 0;
    left: 8%;
    border-radius: 10px 0 0 10px;
    .search-field {
      width: 7%;
      padding: 16px;
      position: relative;
      margin-left: 21%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px 0 0 10px;
    }
    .search_btn {
      height: 20px;
      background: transparent;
      border: none;
      margin-top: 1px;
      margin-bottom: 3%;
      color: white;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      border: none;
      border-radius: 0 6px 6px 0;
      height: 32px;
      font-weight: 700;
      font-family: sans-serif;
      cursor: pointer;
    }
  }

  nav a 
    {
        text-decoration: none;
    }


    nav ul 
    { 
      border-radius: 10px;
      margin: 0;
      padding: 0;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    }


    nav li 
    {
        list-style-position: inside;
        font: 14px sans-serif;
        text-align: center;
        list-style-type: none;
        margin: 0;
    }

    .top-menu
    {
        margin-top: 5%;
    }


    .top-menu li 
    {
        display: inline-block;
        list-style-type: none;
    }

    .heading {
        background-size: cover;
        margin: 30px 0;
        padding-left: 20px;
    }

    h1 {
        display: inline-block;
        font: 40px/40px sans-serif;
        margin: 0;
        padding: 0 10px;
        
    }

    
    aside {
        float: left;
        width: 185px;
    }



    .active {
      height: 50px;
      text-align: center;
      font-size: 2.6vh;
      font-weight: 700;
      font-style: italic;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    }
    .activeFirst{
      text-align: center;
      font-size: 2.6vh;
      font-weight: 700;
      font-style: italic;
      background-image: linear-gradient(-225deg, #dde6e7 0%, #dbe8f1 48%, #bcbbcc 100%);
      border-radius: 10px 10px 0 0;
    }
    .activeLast{
      text-align: center;
      font-size: 2.6vh;
      font-weight: 700;
      font-style: italic;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      border-radius: 0 0 10px 10px;
      margin-bottom: 3%;
    }
    .catalogPtext{
      color: white;
      height: 30px;
    }
</style>
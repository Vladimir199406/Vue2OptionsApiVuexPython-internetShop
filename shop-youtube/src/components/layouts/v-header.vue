<template>
  <div class='v-header'>
                <aside>
                  <nav>
                      <div id="heading">
                        <div class="search-field">
                            <input
                                type="text"
                                v-model="searchValue"
                            >
                            <button class="search_btn">
                              <i class="material-icons" @click="search(searchValue)">search</i>
                            </button>
                            <button class="search_btn">
                              <i class="material-icons" @click="clearSearchField">cancel</i>
                            </button>
                        </div>
                          <img src="../../assets/EDV-logo.jpg" alt="" class="EDVimage">
                          <h2>Categories:</h2>
                      </div>
                      <ul class="aside-menu">
                          <li v-on:click.prevent="activeLink = 1" v-bind:class="{active: activeLink === 1}"><router-link to="/">ALL PRODUCTS</router-link></li>
                          <li v-on:click.prevent="activeLink = 2" v-bind:class="{active: activeLink === 2}"><router-link to="/c-clothes-catalog">CLOTHES</router-link></li>
                          <li v-on:click.prevent="activeLink = 3" v-bind:class="{active: activeLink === 3}"><router-link to="/m-mobile-catalog">MOBILES AND JUDGETS</router-link></li>
                          <li v-on:click.prevent="activeLink = 4" v-bind:class="{active: activeLink === 4}"><a href="">FOOD</a></li>
                          <li v-on:click.prevent="activeLink = 5" v-bind:class="{active: activeLink === 5}"><a href="">BOOKS</a></li>
                          <li v-on:click.prevent="activeLink = 6" v-bind:class="{active: activeLink === 6}"><a href="">TV`s</a></li>
                          <li v-on:click.prevent="activeLink = 7" v-bind:class="{active: activeLink === 7}"><a href="">AUDIO</a></li>
                          <li v-on:click.prevent="activeLink = 8" v-bind:class="{active: activeLink === 8}"><a href="">CONSOLES</a></li>
                          <li v-on:click.prevent="activeLink = 9" v-bind:class="{active: activeLink === 9}"><a href="">GARDEN TOOLS</a></li>                    
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
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'SEARCH_VALUE'
      ])
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
      ]),
      search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
      },
      clearSearchField() {
        this.searchValue = ''
        this.GET_SEARCH_VALUE_TO_VUEX();
      }
    }
  }
</script>

<style lang="scss">


  .EDVimage{
    width: 120px;
    height: 70px;
    border-radius: 20px;
  }
  .v-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: fixed;
    width: 20%;
    top: 0;
    left: 8%;
    border-radius: 10px;
    .search-field {
      width: 7%;
      padding: 16px;
      position: relative;
      margin-right: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }
    .search_btn {
      margin-left: 16px;
      background: transparent;
      border: none;
      margin-top: 1px;
      margin-bottom: 3%;
      color: #fff;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      border: none;
      border-radius: 10px;
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
    {   border-radius: 10px;
        background: #1D8FE1;
        margin: 0;
        padding: 0;
    }


    nav li 
    {
        list-style-position: inside;
        font: 14px sans-serif;
        padding: 10px;
        text-align: left;
        list-style-type: none;
    }

    .top-menu
    {
        margin-top: 5%;
    }


    .top-menu li 
    {
        display: inline-block;
        padding: 10px 30px;
        margin: 0;
        list-style-type: none;
        
    }


    .top-menu li.active 
    {
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        color: #fff;
        border-radius: 5%;
        list-style-type: none;
        
    }

     
    #heading {
        background-size: cover;
        margin: 30px 0;
        padding-left: 20px;
    }

    h1 {
        display: inline-block;
        color: #7e7e7e;
        font: 40px/40px sans-serif;
        margin: 0;
        padding: 0 10px;
        
    }

    
    aside {
        float: left;
        width: 190px;
        
    }

    .aside-menu a {
        color: #8f8f8f;
        color: white;
        font-weight: 700;
    }


    aside > h2 {
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        font: 14px 'Oswald', sans-serif;
        color: #fff;
        padding: 10px;
        margin: 30px 0 0 0;
    }

    aside > p {
        background: #f3f3f3;
        border: 1px solid #e7e7e7;
        padding: 10px;
        margin: 0;
    }
    .active {
      border-radius: 10px;
      color: red;
      font-size: 3vh;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      background-color: #020202;
    }
</style>
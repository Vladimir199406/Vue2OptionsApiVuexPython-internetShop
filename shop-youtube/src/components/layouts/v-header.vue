<template>
  <div class='v-header'>
                <aside>
                  <nav>
                      <div id="heading">
                        <div class="search-field">
                            <input
                                type="text"
                                v-model="searchValue" 
                                placeholder="Please, enter Your request"
                            >
                            <button class="search_btn" @click="search(searchValue)">
                              <i class="material-icons">search</i>
                            </button>
                            
                        </div>
                        <button class="canselSearchBTN" @click="clearSearchField">
                              <i class="material-icons" >clear search</i>
                            </button>
                          
                          
                      </div>
                      <ul class="aside-menu">
                          <li v-on:click.prevent="activeLink = 1" v-bind:class="{active: activeLink === 1}" @click="clearSearchField"><router-link to="/Home">ALL PRODUCTS</router-link></li>
                          <li v-on:click.prevent="activeLink = 2" v-bind:class="{active: activeLink === 2}" @click="clearSearchField"><router-link to="/clothes">CLOTHES</router-link></li>
                          <li v-on:click.prevent="activeLink = 3" v-bind:class="{active: activeLink === 3}" @click="clearSearchField"><router-link to="/mobilesAndGadgets">MOBILES AND GADGETS</router-link></li>
                          <li v-on:click.prevent="activeLink = 5" v-bind:class="{active: activeLink === 5}" @click="clearSearchField"><router-link to="/books">BOOKS</router-link></li>
                          <li v-on:click.prevent="activeLink = 6" v-bind:class="{active: activeLink === 6}" @click="clearSearchField"><router-link to="/TV">TV</router-link></li>
                          <li v-on:click.prevent="activeLink = 7" v-bind:class="{active: activeLink === 7}" @click="clearSearchField"><router-link to="/audio">AUDIO</router-link></li>
                          <li v-on:click.prevent="activeLink = 8" v-bind:class="{active: activeLink === 8}" @click="clearSearchField"><router-link to="/consoles">CONSOLES</router-link></li>
                          <li v-on:click.prevent="activeLink = 9" v-bind:class="{active: activeLink === 9}" @click="clearSearchField"><router-link to="/garden">GARDEN TOOLS</router-link></li>                    
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
    height: 30px;
    border-radius: 5px;
  }
  .canselSearchBTN{
    margin-left: 36px;
      background: transparent;
      margin-top: 1px;
      margin-bottom: 3%;
      color: #fff;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      border: none;
      border-radius: 6px;
      height: 32px;
      font-weight: 700;
      font-family: sans-serif;
      cursor: pointer;
  }

  .v-header {
    margin-top: 10%;
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
      border-radius: 6px;
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
        color: #5b49af;
        font-weight: 700;
    }


    h2 {
        font: 14px 'Oswald', sans-serif;
        color: #8f8f8f;
        margin-right: 100px;
        font-size: 30px;
    }

    aside > p {
        background: #f3f3f3;
        border: 1px solid #e7e7e7;
        padding: 10px;
        margin: 0;
    }
    .active {
      text-align: center;
      border-radius: 30px;
      font-size: 2.3vh;
      font-weight: 700;
      font-style: italic;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    }
</style>
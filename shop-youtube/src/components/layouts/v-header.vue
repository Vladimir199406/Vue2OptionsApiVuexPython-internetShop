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
                          <li><router-link to="/">ALL PRODUCTS</router-link></li>
                          <li><router-link to="/c-clothes-catalog">CLOTHES</router-link></li>
                          <li><router-link to="/m-mobile-catalog">MOBILES AND JUDGETS</router-link></li>
                          <li><a href="">FOOD</a></li>
                          <li><a href="">BOOKS</a></li>
                          <li><a href="">TV`s</a></li>
                          <li><a href="">AUDIO</a></li>
                          <li><a href="">CONSOLES</a></li>
                          <li><a href="">GARDEN TOOLS</a></li>                    
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

     /*HEADER OF THE PAGE*/
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

    /*SIDE MENU*/
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
        li.active a{
        color: #29c5e6;
        list-style-type: none;
        .list-inline li a:focus, .list-inline li a:hover {
         background-color: #f5f5f5;
}
    }
</style>
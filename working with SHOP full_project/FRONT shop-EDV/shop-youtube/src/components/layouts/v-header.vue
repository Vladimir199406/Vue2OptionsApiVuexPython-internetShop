<template>
  <div class='v-header'>



    <div class="buttonLeftMainPage">
      <b-button v-b-toggle.sidebar-no-header variant="primary">
        <b-icon icon="map" font-scale="2" ></b-icon>
      </b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow width="37%">
        <template v-slot:default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title"></h4>
            <aside class="aside-menu-search">
              <nav>
                <div class="heading">
                  <div 
                    class="search-field"
                    v-if="activeLink != 1"
                  >
                    <!--<input
                      class="searchInput"
                      type="text"
                      v-model="searchValue" 
                      placeholder="Select catagory, enter request"
                    >-->
                    <b-form-input v-model="searchValue" placeholder="Search"></b-form-input>
                  </div>
                  <!--BELOW IS AN IMPORTANT ELEMENT OF DYNAMICLY SEARCH-->
                    <span v-if="search(searchValue)"></span>
                  <!--ABOVE IS AN IMPORTANT ELEMENT OF DYNAMICLY SEARCH-->
                </div>
                <ul>
                  <li v-on:click.prevent="activeLink = 1" v-bind:class="{activeFirst: activeLink === 1}" @click="clearSearchField"><router-link to="/Home"><b-icon icon="house-door" font-scale="3" ></b-icon></router-link></li>
                  <li v-on:click.prevent="activeLink = 2" v-bind:class="{activeMenuPoint: activeLink === 2}" @click="clearSearchField"><router-link to="/clothes"><p class="catalogPtext">CLOTHES</p></router-link></li>
                  <li v-on:click.prevent="activeLink = 3" v-bind:class="{activeMenuPoint: activeLink === 3}" @click="clearSearchField"><router-link to="/mobilesAndGadgets"><p class="catalogPtext">MOBILES</p></router-link></li>
                  <li v-on:click.prevent="activeLink = 5" v-bind:class="{activeMenuPoint: activeLink === 5}" @click="clearSearchField"><router-link to="/books"><p class="catalogPtext">BOOKS</p></router-link></li>
                  <li v-on:click.prevent="activeLink = 6" v-bind:class="{activeMenuPoint: activeLink === 6}" @click="clearSearchField"><router-link to="/TV"><p class="catalogPtext">TV</p></router-link></li>
                  <li v-on:click.prevent="activeLink = 7" v-bind:class="{activeMenuPoint: activeLink === 7}" @click="clearSearchField"><router-link to="/audio"><p class="catalogPtext">AUDIO</p></router-link></li>
                  <li v-on:click.prevent="activeLink = 8" v-bind:class="{activeMenuPoint: activeLink === 8}" @click="clearSearchField"><router-link to="/consoles"><p class="catalogPtext">CONSOLES</p></router-link></li>
                  <li v-on:click.prevent="activeLink = 9" v-bind:class="{activeLast: activeLink === 9}" @click="clearSearchField"><router-link to="/garden"><p class="catalogPtext">GARDEN</p></router-link></li>                    
                </ul>
              </nav>
            </aside>
            <b-button variant="primary" block @click="hide">
              <b-icon icon="door-closed-fill" font-scale="3" ></b-icon>
            </b-button>

          </div>
        </template>
      </b-sidebar>
    </div>




    <!--
    <div class="buttonLeftMainPage">
      <b-button v-b-toggle.sidebar-1 variant="primary">
        <b-icon icon="person" font-scale="2" ></b-icon>
      </b-button>
    </div>
    -->


    <!--BELOW ARE CART-SHOP-BUTTONS-->
    <div class="buttonLeftMainPage"
         v-on:click="buttonCartChekerChange"
         v-if="buttonShopCheker == true"
    >
    
      <router-link :to="{name: 'catalog'}">
        <keep-alive>
        <b-button class="" variant="primary">
          <b-icon icon = "shop" font-scale="2"></b-icon>
        </b-button>
        </keep-alive>
      </router-link>
    </div>


    <div class="buttonLeftMainPage"
         v-on:click="buttonShopChekerChange"
         v-if="buttonCartCheker == true"
    >
      <span>
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
          <keep-alive>
          <b-button class="" variant="primary"> 
            
            <b-icon icon="cart2" font-scale="2"></b-icon> 
            {{CART.length}}
          </b-button>
          </keep-alive>
        </router-link>
      </span>
    </div>
    <!--ABOVE ARE CART-SHOP-BUTTONS-->






                <!--
                <aside>
                  <nav>
                      <div class="heading">
                        <div 
                          class="search-field"
                          v-if="activeLink != 1"
                        >
                            <input
                                class="searchInput"
                                type="text"
                                v-model="searchValue" 
                                placeholder="Please, enter Your request"
                            >
                        <button class="canselSearchBTN" @click="clearSearchField">
                              <i class="material-icons" >
                                <b-icon icon="eye-slash" font-scale="1.5"></b-icon> 
                              </i>
                        </button>
                            
                        </div>
                        
                        <span v-if="search(searchValue)"></span>
                        
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
                -->







  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "v-header",
    components: {
    },
    props: {},
    data() {
      return {
        activeLink: 1,
        searchValue: '',
        buttonShopCheker: false,
        buttonCartCheker: true
      }
    },
    computed: {
      ...mapGetters([
        'SEARCH_VALUE',
        'SEARCH_VALUE_CLOTHES',
        'CART'
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
      },
      buttonShopChekerChange(){
        this.buttonShopCheker = true
        this.buttonCartCheker = false
      },
      buttonCartChekerChange(){
        this.buttonCartCheker = true
        this.buttonShopCheker = false
      }
    }
  }
</script>

<style lang="scss">

.buttonLeftMainPage{

  margin-top: 10%;
}

.aside-menu-search{
  width: 100%;
}
  .searchInput{
    height: 5%;
    width: 70%;
    border-radius: 10px 0 0 10px;
  }
  .canselSearchBTN{
      height: 7%;
      width: 20%;
      background: transparent;
      margin-top: 5px;
      margin-bottom: 3%;
      color: white;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
      border: none;
      border-radius: 0 6px 6px 0;
      font-family: sans-serif;
      cursor: pointer;
  }

  .v-header {
    color: #817f7f;
    margin-top: 3.5%;
    color: white;
  
    position: fixed;
    z-index: 100;
    top: 0;
    left: 8%;
    border-radius: 10px 0 0 10px;
    .search-field {
     
      padding: 16px;
      position: relative;
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
        text-align: center;
        list-style-type: none;
        margin: 0;
    }

    .top-menu
    {
        margin-top: 1%;
    }


    .top-menu li 
    {
        display: inline-block;
        list-style-type: none;
    }

    .heading {
        background-size: cover;
    }

    h1 {
        display: inline-block;
        margin: 0;
        
    }

    
    aside {
        float: left;
    }



    .activeMenuPoint {
      margin-top: 3%;
      margin-bottom: 3%;
      height: 160%;
      text-align: center;
      font-weight: 700;
      font-style: italic;
      background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    }
    .activeFirst{
      margin-top: 3%;
      margin-bottom: 3%;
      text-align: center;
      font-weight: 700;
      font-style: italic;
      background-image: linear-gradient(-225deg, #dde6e7 0%, #dbe8f1 48%, #bcbbcc 100%);
      border-radius: 10px 10px 0 0;
    }
    .activeLast{
      margin-top: 3%;
      margin-bottom: 7%;
      text-align: center;
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
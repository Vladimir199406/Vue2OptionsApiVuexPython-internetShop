<template>
  <div class='v-catalog'>

    <!--SIDEBAR BELOW-->
    <template>
      <div class="accountLogRegSidebar">
        <div class="accountLogRegSidebarButton">
          <b-button v-b-toggle.sidebar-1 variant="primary">
            Account
            <b-icon icon="person" font-scale="2" ></b-icon>
          </b-button>
        </div>
        <b-sidebar id="sidebar-1" title="" shadow width="40%">
          <div class="px-3 py-2">
            <!--LOG/REG TAB MENU BELOW-->
            <div class="logRegisterаа">
              <b-tabs>
                <b-tab active>
                  <template v-slot:title>
                      Log in 
                      <b-icon icon="person-fill" font-scale="1" color="#007bff" shift-v="3"></b-icon>
                  </template>
                  <div class="tabsContent">
                    <div>
                      <b-icon icon="person-fill" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="loginUsername"
                        placeholder="username"
                      >
                    </div>
                    <div>
                      <b-icon icon="key-fill" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="loginPassword" 
                        placeholder="password"
                      >
                    </div>
                  </div>
                  <div class="buttonLogRegSubmit">
                    <b-button 
                      variant="outline-primary"
                      @click="sendDataLogIn"
                    >
                      LOG IN
                    </b-button>
                  </div>
                </b-tab>

                <b-tab>
                  <template v-slot:title>
                    Register
                    <b-icon icon="person-lines-fill" font-scale="1" color="#007bff"></b-icon>
                  </template>
                  <div class="tabsContent">
                    <div>
                      <b-icon icon="person-badge-fill" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="Regfirst_name"
                        placeholder="First name"
                      >
                    </div> 
                    <div>
                      <b-icon icon="person-badge" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="Reglast_name"
                        placeholder="last_name"
                      >
                    </div>
                    <div>
                      <b-icon icon="person-fill" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="Regusername"
                        placeholder="username"
                      >
                    </div>
                    <div>
                      <b-icon icon="envelope" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="Regemail"
                        placeholder="email"
                      >
                    </div>
                    <div>
                      <b-icon icon="key-fill" font-scale="1.7" color="white" shift-v="-2" shift-h="-8"></b-icon>  
                      <input
                        class="inputDataLogReg"
                        type="text"
                        v-model="Regpassword"
                        placeholder="password"
                      >
                    </div> 
                  </div>
                  <div class="buttonLogRegSubmit">
                    <b-button variant="outline-primary"
                               @click="sendDataRegister"
                    >
                      REGISTER
                    </b-button>
                  </div>
                </b-tab> 
              </b-tabs>
            </div>
            <!--LOG/REG TAB MENU ABOVE-->
          </div>
        </b-sidebar>
      </div>
    </template>
    <!--SIDEBAR ABOVE-->

    <div class="companyPicture">
      <img src="../../assets/EDV-logo.jpg"/>
      <blockquote class="companyPicture">
        <p>
          "A good business project wins the hearts of clients, the best creates a society."
        </p>
        <cite>
          EDV company slogan
        </cite>
      </blockquote>     
    </div>

    <!--<router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <keep-alive>
      <b-button class="v-catalog__link_to_cart" variant="primary">
        Shopping cart 
        <b-icon icon="cart2" font-scale="2"></b-icon> 
        {{CART.length}}
      </b-button>
      </keep-alive>
    </router-link>-->






    <!--BELOW IS A TAB MENU TO OF THE MAIN COMPONENT-->
    <div class="startingMenuTab">
      <b-card no-body>
        <b-tabs card>
          <b-tab no-body title="EDV shop">
             <b-card-title>Our shop</b-card-title>
             <b-card-text>
               EDV shop is a marketplace where consumers can purchase quality goods quickly and safely. 
               There is no more need to search the internet trying to find goods you need. 
               You have already selected the right resource.
             </b-card-text>


              <!--BELOW IS A SLIDER-->
              <!--PAY ATTENTION, THERE ARE PICTURES URL`s BELOW-->            
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  fade
                  background="#ababab"
                  img-width="50%"
                  img-height="30%"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >

                  <!-- Slides with custom text -->
                  <b-carousel-slide img-src="https://images.unsplash.com/photo-1511733897353-5b04f82435a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
                    <div class="slider2Text">
                      <h5>Start shopping</h5>
                      <b-button v-b-toggle.sidebar-no-header variant="primary">
                        Main menu
                        <b-icon icon="map" font-scale="2" ></b-icon>
                      </b-button>
                    </div>
                  </b-carousel-slide>

                  <!-- Slides with image only -->
                  <b-carousel-slide img-src="https://images.unsplash.com/photo-1574607407517-cd664b1504f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80">
                    <div class="slider3Text">  
                      <h5>Create an account, use sale system</h5>
                      <b-button v-b-toggle.sidebar-1 variant="primary">
                        <b-icon icon="person" font-scale="2" ></b-icon>
                      </b-button>
                    </div>
                  </b-carousel-slide>

                  <!-- Slides with img slot -->
                  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->

                  <b-carousel-slide img-src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                        
                          <b-button variant="primary"
                                    class = "slider4Text"
                          >
                            SPECIAL
                            <b-icon icon="hourglass-split" animation="spin" font-scale="2"></b-icon>
                            OFFER
                          </b-button>
                        
                  </b-carousel-slide>
                </b-carousel>

                <!--SLIDE CONTROLL IS OFF, DELETE ME TO SEE WHICH SLIDE IS NOW ACTIVE
                <p class="mt-4">
                  Slide #: {{ slide }}<br>
                  Sliding: {{ sliding }}
                </p>
                -->
              </div>
              <!--ABOVE IS A SLIDER-->









<div class="cardsInMainTabMenu">
  <b-card-group columns>
    <b-card
      title="TV"
      img-src="https://images.unsplash.com/photo-1595425178239-7f2e3af36041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        Modern television is an important part of man`s life. 
        Smart TV technology, gaming, online cinemas 
        and much more. So, let's get start?
      </b-card-text>
    </b-card>

    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>We meet bad interface, poor while we are searching the Internet. 
           EDV company is avoiding these bad decisions. We use only the most 
           powerfull technologies. Join the community, help us to make business 
           projects comfortable for people.</p>
        <footer class="blockquote-footer">
          EDV company business policy
        </footer>
      </blockquote>
    </b-card>

    <b-card title="Mobiles" img-src="https://images.unsplash.com/photo-1515169040891-100d5a84502c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" img-alt="Image" img-top>
      <b-card-text class="small text-muted">If you want to buy a convinient gadget, you are on the right way.</b-card-text>
    </b-card>

    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>A good business project wins the hearts of clients, the best creates a society.</p>
        <footer>
          <small>EDV company business policy</small>
        </footer>
      </blockquote>
    </b-card>

    <b-card img-src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60">
      <b-card-title>Audio</b-card-title>
      <b-card-text>
        We like music, we guess You like it too!
      </b-card-text>
    </b-card>

    <b-card img-src="https://images.unsplash.com/photo-1577058005446-f4380dcc4e08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" img-alt="Image" overlay>
      <template v-slot:footer>
        <b-card-title>Books</b-card-title>
        <b-card-text>
          They are too interesting to ignore.
        </b-card-text>
      </template>
    </b-card>

    <b-card img-src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" img-alt="Image" img-top>
      <b-card-title>Clothes</b-card-title>
      <b-card-text>
        You have style, we glad You share it with us.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">P.S. don`t forget use discounts with 
          our loyalty program
        </small>
      </template>
    </b-card>
  </b-card-group>
</div>


          </b-tab>

          <b-tab no-body title="Help me to navigate">
            <!--BELOW IS A SUB TAB MENU IN STARTING COMPONENT-->
            <b-card-text>
                <b-card-title>Website operating instructions for user</b-card-title>
                Usually the user does not meet a user-friendly interface 
                when he visits the site for the first time. Fix it! 
                Make your interface as clear as possible for the user
            </b-card-text>
            <img class="pictureInStartingMenuTab" src="../../assets/EDV-logo.jpg"/>
            <div class="subStartingMenuTabHelpToNavigate">
              <b-card no-body>
                <b-tabs pills card>
                  <b-tab title="Main menu" active >
                    <div class="helpMeToNavigate">
                      <b-icon icon="info-circle-fill" animation="throb" font-scale="1.5"></b-icon>
                      In the upper left corner is the website navigation button. It looks like this:
                        <b-button v-b-toggle.sidebar-no-header variant="primary">
                          Main menu
                          <b-icon icon="map" font-scale="2" ></b-icon>
                        </b-button>
                        If You press the button, the navigation menu will open.
                        To close it, use the "Close button", which looks like this:
                        <b-button variant="primary">
                          <b-icon icon="door-closed-fill" font-scale="2" ></b-icon>
                        </b-button>.
                        If You want to get to the subdirectory of the main menu, just click on it.
                        When you click on it, you will see the subdirectory content.
                        By default you are here: 
                        <router-link to="/Home"><b-icon icon="house-door" font-scale="3" ></b-icon></router-link>
                    </div>
                  </b-tab>

                  <b-tab title="Account">
                    <div class="helpMeToNavigate">
                      <b-icon icon="info-circle-fill" animation="throb" font-scale="1.5"></b-icon>
                      In the upper right corner is the website account button. It looks like this:
                      <b-button v-b-toggle.sidebar-1>
                        <b-icon icon="person" font-scale="2" ></b-icon>
                      </b-button>.
                      Use it to get get to register an account or to log in.
                      To close this menu, press:
                      <b-icon icon="x" font-scale="2" cursor="pointer"></b-icon>.
                    </div>
                  </b-tab>

                  <b-tab title="Cart">
                    <div class="helpMeToNavigate">
                      <b-icon icon="info-circle-fill" animation="throb" font-scale="1.5"></b-icon>
                      On the right side is of the website is a cart button. It looks like this:
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
            <!--ABOVE IS A SUB TAB MENU IN STARTING COMPONENT-->
          </b-tab>

          <b-tab no-body title="Contacts">
            <b-card-text>
              <div>
                <b-icon icon="envelope" font-scale="1.7" color="grey" shift-v="-1" shift-h="-1"></b-icon>
                example@mail.com
              </div>
              <div>
                <b-icon icon="house-fill" font-scale="1.7" color="grey" shift-v="-1" shift-h="-1"></b-icon>
                Moscow, Sadovaya st. 15, 10101
              </div>
            </b-card-text>
            <b-card-footer>Contacts are above</b-card-footer>
          </b-tab>

          <b-tab title="About company">
            <b-card-title>EDV company is the leader of making <code> real </code> good content</b-card-title>
            <b-card-text>
              So here you can put some info about your company. For example: tell something about it's history
              , you can also tell about the rules which helps company making real good products to purchase goods
              and services. 
            </b-card-text>

            <!--BELOW IS AN INTEGRATED VIDEO-->
           
            <div class="integratedVideo">
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.pexels.com/video/man-selling-a-variety-of-fruits-and-juices-3808494"
                allowfullscreen
              >
              </b-embed>
            </div>
            
            <!--ABOVE IS AN INTEGRATED VIDEO-->

          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <!--ABOVE IS A TAB MENU TO OF THE MAIN COMPONENT-->





<div class="calendar">
 <b-row>
    <b-col md="auto">
      <b-calendar locale="en-US"></b-calendar>
    </b-col>
    <b-col>
      <h4>We care about your time</h4>
      <p class="mb-0">If you have urgent business, 
        you need to make an appointment or just take 
        a look at the calendar, take a rest, do what is necessary, 
        we will always wait</p>
      <pre class="small">Best regards, your EDV.</pre>
    </b-col>
  </b-row>
</div>






  </div>
</template>

<script>
  //import {mapGetters} from 'vuex'
  import axios from "axios"
  //import qs from 'qs' //important querry library, usefull
  export default {
    name: "v-catalog",
    components: {},
    props: {},
    data() {
      return {
        isvPopupLogIn: false,
        selected: '',
        sortedProducts: [],
        messages: [],
        Regemail: "",
        Regusername: "",
        Regfirst_name: "",
        Reglast_name: "",
        Regpassword: "",
        loginUsername: "",
        loginPassword: "",
        slide: 0,
        sliding: null
      }
    },
    /*computed: {
      ...mapGetters([
        'CART'
      ]),
    },*/
    methods: {

      //BELOW IS A POST REQUEST TO BACKEND TO REGISTER A USER
      sendDataRegister: function(postBody){
        postBody = {
            username: this.Regusername,
            email: this.Regemail,
            password: this.Regpassword,
            first_name: this.Regfirst_name,
            last_name: this.Reglast_name
        };
        JSON.stringify(this.postBody);
        axios.post('http://127.0.0.1:8000/user/users/', postBody)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
      },
      //ABOVE IS A POST REQUEST TO BACKEND TO REGISTER A USER

      //BELOW IS A POST REQUEST TO BACKEND TO LOG IN
      sendDataLogIn: function(postBody){
        postBody = {
            username: this.loginUsername,
            password: this.loginPassword
        };
        JSON.stringify(this.postBody);
        axios.post('http://127.0.0.1:8000/user/login/', postBody)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
      },
      //ABOVE IS A POST REQUEST TO BACKEND TO LOG IN

      //BELOW ARE METHODS FOR A SLIDER
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
      //ABOVE ARE METHODS FOR A SLIDER

    },
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">

  .v-catalog {
    color: #817f7f;
    text-align: center;
    width: 70%;
    margin-left: 17%;
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__link_to_cart {
      position: fixed;
      top: 80px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }

  .accountLogRegSidebar{
 
      margin-top: 9.5%;
      float: right;
      z-index: 100;
  }

    .accountLogRegSidebarButton{
 
      margin-top: 9.5%;
      float: right;
    }

    .companyPicture{
      margin-top: 2%;
      display: inline-block;
    }

  .logRegister{
  margin-bottom: 15%;
  border-radius: 10px;
  font-size: 160%;
  margin-bottom: 15%;
}

.logLabel{
   padding: 2%;
   border-radius: 10px;
   cursor: pointer;
   background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
   
}

.registerLabel{
  padding: 2%;
  margin-left: 13%;
  border-radius: 10px;
  cursor: pointer;
  background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
}

.tabsContent{
  background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
  border-radius: 20px;
}

.inputDataLogReg{
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 10px;
  width: 50%;
}

.buttonLogRegSubmit{
  margin: 3%;
}

.startingMenuTab{
  margin-bottom: 20%;
  margin-left: 20%;
  width: 83%;
}

.pictureInStartingMenuTab{
  width: 70%;
}

.subStartingMenuTabHelpToNavigate{
  width: 70%;
}

.helpMeToNavigate{
  margin-left: 5%;
  margin-bottom: 5%;
  text-align: left;
}

.integratedVideo{
  margin-left: 5%;
  width: 90%;
}

.slider1Text{
  margin-top: 23%;
}

.slider2Text{
  margin-bottom: 1%;
}

.slider3Text{
  margin-bottom: 1%;
}

.cardsInMainTabMenu{
  margin-top: 10%;
}

.calendar{
  margin-bottom: 10%;
}

</style>

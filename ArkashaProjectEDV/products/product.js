Vue.component('product-details', 
    {
    props: {
      details: {
        type: Array,
        required: true
      }
    },

    template: 
    `
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    `
  }
)
  
Vue.component('product', 
    {   //below is a property which helps to understand type of user
        props: 
        {
            premium: 
            {
                type: Boolean, 
                required: true
                //BOOLEAN controller for "Shipping" ==> 
                //not for a specific product, template
            },
        },

        template: 
        `
            <div class="product">
                <div class="product-image">
                    <img :src="image" />
                </div>

                <div class="product-info">
                    <h1>{{product}}</h1>
                    <h1>{{title}}</h1>
                    <p>{{ description }}</p>
                    
                    <div class = "stock">
                    <p class="premiumUser">Shipping: {{shipping}}</p>
                    <!--users BOOLEAN verification-->

                        <p v-if="inStock"> IN STOCK </p>
                        <p class = "outOfStock" v-else> OUT OF STOCK </p>
                    </div>

                    <span v-if="discount">Discount: use the client's card</span>
                    <!--lower price product-->
                    <p class="materialHeader">Material: </p>
                    <ul>
                        <!--cycle of elements of an array-->
                    </ul>

                    <product-details :details="details"></product-details>
                    <!--products materials-->

                    <div v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        class = "variantColorChange" 
                        :style="{backgroundColor: variant.variantColor}"
                        @mouseover="updateProduct(index)">
                        <!--cycle of variants of an array elements (color)-->
                        <!--key for the color-control-->
                    </div>

                    <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}"> Add </button>
                    <!--using method written in app.methods-->
                    <!--if is out of stock disable button-->

                    <button>Remove one</button>

                    <button class="removeAllButton" 
                        @click="removeFromCart" 
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}">Remove all</button>
                    <!--button to remove from cart-->
                    <!--if is out of stock disable button-->

                </div>

                <div>
                    <h2 class ="leftReviews">Left reviews: </h2>
                    <p class="reviewActual" v-if="!reviews.length">No reviews yet</p>
                    <!--checking for lenght-->
                    <ul>
                        <li v-for="review in reviews">
                        <p>{{review.name}}</p>
                        <p>Rating: {{review.rating}}</p>
                        <p>{{review.review}}</p>
                        <!--showing left reviews-->
                    </ul>
                </div>
                <!--reviews info-->

                <product-review @review-submitted="addReview"></product-review>
                <!--review field with rate and message-->

            </div>
        `,


        data(){
            return{

                product: "Hat",

                brand: "ARKASHA",

                description: "So warm like it was created by a grandma",
                
                selectedVariant: 0,

                discount: true,
                //discount field dependence
                
                details: ["88% wool", "10% cotton", "2% polyester"],
                //an array of elements of the product
                
                variants: 
                [
                    {
                        variantId: 312,
                        variantColor: "green",
                        variantImage: "pictures/hats/green.jpg",
                        variantQuantity: 10,
                    },
                    {
                        variantId: 311,
                        variantColor: "blue",
                        variantImage: "pictures/hats/blue.jpg",
                        variantQuantity: 0,
                    }
                    //an array of variants of the product (color)
                ],
                reviews: [],
            }
        },//function for products data (returns products info)

        methods:
        {
            addToCart() 
            {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
            },

            removeFromCart() 
            {
                this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
            },

            updateProduct(index)
            {
                this.selectedVariant = index;
                console.log(index);
            },
    
            addReview(productReview) 
            {
              this.reviews.push(productReview);
            },
            //add a review ===> going to the data reviews
        },

        computed: 
        {
            title()
            {
                return this.brand + ' ' + this.product
            },
            
            image()
            {
                return this.variants[this.selectedVariant].variantImage;
            },

            inStock()
            {
                return this.variants[this.selectedVariant].variantQuantity;
            },

            shipping()
            {
                if(this.premium)
                {
                    return "Free";
                }
                else
                {
                    return "299р";
                }
            },
        },
    }
)

//product-review form below
Vue.component('product-review',
    {
        template:
        `
        <form class="review-form" @submit.prevent="onSubmit">
            <!--array of errors is below-->
            <p v-if="errors.length">
                <b>Need to correct error(s): </b>
                <ul>
                    <li  v-for="error in errors">{{error}}</li>
                </ul>
            </p>
        
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            
            <p>
                <label for="review">Review:</label>      
                <textarea id="review" v-model="review"></textarea>
            </p>
            
            <!--rating system of a product-->
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
                <option>0</option>
                </select>
            </p>
                




            <p>Would you recommend this product?</p>
            <label>
              Yes
              <input type="radio" value="Yes" v-model="recommend"/>
            </label>
            <label>
              No
              <input type="radio" value="No" v-model="recommend"/>
            </label>






            <p>
                <input type="submit" value="Submit">  
            </p>    
        </form>
        `,
        //submit data below
        data()
        {
            return{
                name: null,
                review: null,
                rating: null,
                errors: [],
            }
        },

        methods:
        {
            //submit review checking below
             onSubmit() 
             {
                if (this.name && this.review && this.rating)
                {
                let productReview = 
                {
                  name: this.name,
                  review: this.review,
                  rating: this.rating,
                  recommend: this.recommend,
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
                this.recommend = null
                }
                else
                {
                    if(!this.name) 
                    {
                        this.errors.push ("Name is empty");
                    }

                    if(!this.review) 
                    {
                        this.errors.push ("Review is empty");
                    }

                    if(!this.rating) 
                    {
                        this.errors.push ("Rating is empty");
                    }

                    if(!this.reccomend)
                    {
                        this.errors.push("Recommendation required")
                    }
                }
            }
        }
    }
)//revie field with comment and rate

var app = new Vue
(
    {
        el: "#app",

        data:
        {
            premium: true,
            //premium user: for example "shipping is free" OR price
            cart: [],
        },
        
        methods:
        {
            updateCart(id)
            {
                this.cart.push(id);
            },

            removeItem(id) 
            {
                for(var count = this.cart.length - 1;  count >= 0; count--) 
                {
                  if (this.cart[count] === id) 
                  {
                     this.cart.splice(count, 1);
                  }
                }
            },
        },
    }
)
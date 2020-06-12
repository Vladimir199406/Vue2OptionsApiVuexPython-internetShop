<template>
    <div class="wrapper">
            <!--SECTION QUOTE // TEXT-->
            <section>
                <blockquote class="citate">
                    <p>
                        "It is never too late to late to spend your time and money wisely"
                    </p>
                    <cite>
                        EDV company slogan
                    </cite>
                </blockquote>
                <div class="marginFoto">
                    <figure class="figImg">
                            <div><img src="./think.jpg" width="285" height="175" alt=""></div>
                    </figure>
                    <figure class="figImg">
                            <img src="./cart.jpg" width="285" height="175" alt="">
                    </figure>
                    <figure class="figImg">
                            <img src="./pay.jpg" width="285" height="175" alt="">
                    </figure>
                </div>
            </section>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .EDV
    {
        margin-left: 83%;
        font-size: 200%;
        text-shadow:  1px 1px 2px black, 0 0 1em  #1D8FE1;
        color: rgb(97, 33, 218);
        
    }

    .logRegBlock
    {
        padding-left: 90px;
    }


    .register
    {
        margin-left: 300px;
    }


    p 
    {
        margin: 20px 0;
    }


    .wrapper 
    {
        max-width: 80%;
        margin: auto;
        background-image: url(../../assets/EDV-logo.jpg);
        background-repeat: no-repeat;
        background-position: top left = left top = 0% 0%;
    }


    header 
    {
        padding: 20px 0;
    }


    nav a 
    {
        text-decoration: none;
    }


    nav ul 
    {
        margin: 0;
        padding: 0;
    }


    nav li 
    {
        list-style-position: inside;
        font: 14px sans-serif;
        padding: 10px;
        text-align: left;
    }


    .bott-menu li 

    {
        display: inline-block;
        padding: 10px 30px;
        margin: 0;
    }


    .bott-menu a 
    {
        color: #b2b2b2;
    }


    .logIn
    {
        padding-left: 30%;
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
    }


    .top-menu li.active 
    {
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        color: #fff;
        border-radius: 5%;
    }


    .top-menu a 
    {
        color: #b2b2b2;
    }


    .send
    {
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        border-radius: 10%;
        color: white;
        height: 33px;
        font-weight: 700;
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
        width: 250px;
    }
    .aside-menu li {
        font-weight: 300;
        list-style-type: square;
    }

    .aside-menu li.active {
        color: #29c5e6;
    }

    .aside-menu a {
        color: #8f8f8f;
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
        padding: 10px;
        margin: 0;
    }




    /*SECTION QUOTE // TEXT*/
    section {
        margin-left: 280px;
        padding-bottom: 50px;
        border-radius: 10px;
    }

    blockquote {
        margin: 0;
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        padding: 10px 20px;
        font-family: sans-serif;
        font-weight: 300;
    }

    blockquote p {
        color: #fff;
        font-style: italic;
        font-size: 33px;
        margin: 0;
    }

    blockquote cite {
        display: block;
        font-size: 20px;
        font-style: normal;
        color: #115261;
        margin: 0;
        text-align: right;
    }



    /*SECTION QUOTE // TEXT -----> IMAGE*/
    figure {
        display: inline-block;
        margin: 0;
        font-family: sans-serif;
        font-weight: 300;
        border-radius: 10px;
    }

    figure img {
        display: block;
        border: 3px solid rgb(89, 74, 173);
        box-shadow: 0 0 10px #444;
        border-radius: 10px;
    }

    .figImg{
        margin-left: 2%;
    }

        .marginFoto
    {
        margin-top: 5%;
        margin-left: 4%;
        justify-content: space-between;

    }

    figure figcaption {
        font-size: 16px;
        font-weight: 300;
        margin-top: 5px;

    }

    figure figcaption span {
        display: block;
        font-size: 14px;
        color: #29c5e6;
    }
    section > figure + figure {
        margin-left: 28px;
    }

    /*PRODUCTS*/
    section > h2 {
        font: 30px sans-serif;
        font-weight: 300;
        color: white;
        padding: 0 10px;
        margin: 30px 0 0 0;
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
    }

    .citate
    {
        border-radius: 20px;
        margin-left: 5%;
        width: 92%;
    }
</style>
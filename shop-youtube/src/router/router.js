import Vue from 'vue'
import Router from 'vue-router'
//imported mode router

import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'
import cClothesCatalog from '../components/productsCateg/clothes/c-clothes-catalog'
import mMobilesAndGadgetsCatalog from '../components/productsCateg/mobilesAndGadgets/m-mobilesAndGadgets-catalog'
import bBooksCatalog from '../components/productsCateg/books/b-books-catalog'
import tTVCatalog from '../components/productsCateg/TV/t-tv-catalog'
import aAudioCatalog from '../components/productsCateg/audio/a-audio-catalog'
import cConsolesCatalog from '../components/productsCateg/consoles/c-consoles-catalog'
import gGardenCatalog from '../components/productsCateg/gardenTools/g-garden-catalog'

//added components bettween them is a link

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/Home',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/clothes',
            name: 'clothes',
            component: cClothesCatalog
        },
        {
            path: '/mobilesAndGadgets',
            name: 'mobilesAndGadgets',
            component: mMobilesAndGadgetsCatalog
        },
        {
            path: '/books',
            name: 'books',
            component: bBooksCatalog
        },
        {
            path: '/TV',
            name: 'TV',
            component: tTVCatalog
        },
        {
            path: '/audio',
            name: 'audio',
            component: aAudioCatalog
        },
        {
            path: '/consoles',
            name: 'consoles',
            component: cConsolesCatalog
        },
        {
            path: '/garden',
            name: 'garden',
            component: gGardenCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true //when change route, add data
        }
    ],
    scrollBehavior (to, from, savedPosition) {
         if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
    }
})
export default router;
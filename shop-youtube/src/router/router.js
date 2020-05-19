import Vue from 'vue'
import Router from 'vue-router'
//imported mode router

import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'
//added components bettween them is a link

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true //when change route, add data
        }
    ]
})
export default router;
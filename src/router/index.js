import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/Products.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/createcategory',
    name: 'createCategory',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/createCategory.vue')
  },
  {
    path: '/createproduct',
    name: 'createProduct',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/createProduct.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/category/:id',
    name: 'Category',
    meta: {
      layout: 'default'
    },
    component: () => import('../views/Category.vue'),
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

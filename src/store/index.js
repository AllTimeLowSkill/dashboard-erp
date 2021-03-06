import Vue from 'vue'
import Vuex from 'vuex'
import sections from './sections'
import products from './products'
import categories from './categories'
import sales from './sales'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sections,
    products,
    categories,
    sales
  }
})

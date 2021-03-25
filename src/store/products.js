import vue from 'vue'
import vuex from 'vuex'
import { getProducts, deleteProduct, createProduct, getProduct, updateProduct } from '../services/products'

const mutations = {
    SET_PRODUCTS(state, products){
        state.products = products
    },

    DELETE_ITEM(state, products){
        state.products = products
    },

    CREATE_ITEM(state, products){
        state.products = products
    },

    GET_PRODUCT(state, product){
        state.product = product
    },

    UPDATE_ITEM(state, products){
        state.products = products
    }
}

const actions = {
    async fetchProducts({ commit }){
        try {
            const items = await getProducts()
            commit('SET_PRODUCTS', items.data)
        } catch (error) {
            console.log(error)
        }
    },

    async fetchDeleteProduct({ commit }, id){
        try {
            console.log(id)
            const items = await deleteProduct(id)
            commit('DELETE_ITEM', items.data)
        } catch (error) {
            
        }
    },

    async fetchCreateProduct({ commit }, data){
        try {
            const items = await createProduct(data)
            commit('CREATE_ITEM', items.data)
        } catch (error) {
            
        }
    },

    async fetchProduct({ commit }, id){
        try {
            const item = await getProduct(id)
            commit('GET_PRODUCT', item.data)
        } catch (error) {
            
        }
    },

    async fetchUpdateProduct({ commit }, { id, data }){
        try {
            console.log(id, data)
            const items = await updateProduct(id, data)
            commit('UPDATE_ITEM', items.data)
        } catch (error) {
            
        }
    }
}

const getters = {
    products: ({ products }) => products ,
    product: ({ product }) => product
}

const state = () => ({
    products: [],
    product: {}
})

export default {
    mutations,
    actions,
    getters,
    state
}
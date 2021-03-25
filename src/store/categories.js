import vue from 'vue'
import vuex from 'vuex'
import { getCategories, deleteCategory, createCategory, getCategory, updateCategory } from '../services/categories'

const mutations = {
    SET_CATEGORIES(state, categories){
        state.categories = categories
    },

    DELETE_ITEM(state, categories){
        state.categories = categories
    },

    CREATE_ITEM(state, categories){
        state.categories = categories
    },

    GET_CATEGORY(state, category){
        state.category = category
    },

    UPDATE_ITEM(state, category){
        state.category = category
    }
}
const actions = {
    async fetchCategories({ commit }){
        try {
            const items = await getCategories()
            commit('SET_CATEGORIES', items.data)
        } catch (error) {
            
        }
    },

    async fetchDeleteCategory({ commit }, id){
        try {
           const items = await deleteCategory(id)
           commit('DELETE_ITEM', items.data)
        } catch (error) {
            
        }
    },

    async fetchCreateCategory({ commit }, data){
        try {
            const items = await createCategory(data)
            commit('CREATE_ITEM', items.data)
        } catch (error) {
            
        }
    },

    async fetchCategory({ commit }, id){
        try {
            const item = await getCategory(id)
            commit('GET_CATEGORY', item.data)
        } catch (error) {
            
        }
    },

    async fetchUpdateCategory({ commit }, { id, data }){
        try {
            const items = await updateCategory(id, data)
            commit('UPDATE_ITEM', items.data)
        } catch (error) {
            
        }
    }
}
const getters = {
    categories: ({ categories }) => categories,
    category: ({ category }) => category
}
const state = () => ({
    categories: [],
    category: {}
})

export default {
    mutations,
    actions,
    getters,
    state
}
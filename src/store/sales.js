import vue from 'vue'
import vuex from 'vuex'
import { getSales } from '../services/sales'

const mutations = {
    GET_SALES(state, sales){
        state.sales = sales
    }
}

const actions = {
    async fetchSales({ commit }){
        try {
            const items = await getSales()
            commit('GET_SALES', items.data)
        } catch (error) {
            
        }
    }
}

const getters = {
    sales: ({ sales }) => sales,
    sale: ({ sale }) => sale  
}

const state = () => ({
    sales: [],
    sale: {}
})

export default {
    mutations,
    actions,
    getters,
    state
}
import {productsClient} from "@/api/products";

const state ={
    products:[]
}
const getters = {
    getAllProducts(state){
        return state.products
    },

   productsQuantity(state){
        return state.products.length
    }
}


const mutations={
    setProducts(state,payload){
        state.products = payload
    }
}

const actions ={
    async fetchAllProducts({commit}){
        const response = await productsClient()
        commit('setProducts',response)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}


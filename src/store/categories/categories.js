import {productsClient} from "@/api/products";
import {getAllcategories} from "@/api/categories";

const state ={
    categories:[]
}
const getters = {
    getAllCategories(state){
        return state.categories
    },
}

const actions ={
    async fetchAllCategories({commit}){
        const response = await getAllcategories()
        commit('setCategories',response)
    }
}

const mutations={
    setCategories(state,payload){
        state.products = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}


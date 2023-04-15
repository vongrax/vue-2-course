import {apiClient} from "@/api/index";

export const getAllcategories = async () =>{
    const {data}= await apiClient.get(`/products/categories`)
    return data
}

export const getCategory = async (category) =>{
    const {data}= await apiClient.get(`/products/category/${category}`)
    return data
}

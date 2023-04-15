import {apiClient} from "@/api/index";

export const productsClient = async () =>{
    const {data}= await apiClient.get('/products',)
    return data
}

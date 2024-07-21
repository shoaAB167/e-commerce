import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { server } from './userAPI'
import { AllProductsResponse } from "../../types/api-types"

export const productAPI = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/product/` }),
    endpoints: (builder) => ({
        latestProducts : builder.query<AllProductsResponse,string>({query : ()=>"latest"}),
        allProducts : builder.query<AllProductsResponse,string>({query : (id)=>`admin-products?id=${id}`})
    })
    
})

export const {useLatestProductsQuery, useAllProductsQuery} = productAPI
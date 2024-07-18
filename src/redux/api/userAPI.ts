import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { MessageResponse, UserResponse } from "../../types/api-types"
import { User } from "../../types/types"
import axios from "axios"

const server = import.meta.env.VITE_SERVER

export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/user/` }), 
    endpoints: (builder) => ({
        login: builder.mutation<MessageResponse,User>({
            query: (user) => ({
                url: "new",
                method: "POST",
                body: user
            })
        })
    })
})

export const getUser = async(id:string) => {
    try {
        const {data}:{data : UserResponse} = await axios.get(`${server}/api/v1/user/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

export const {useLoginMutation} = userAPI
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { MessageResponse } from "../../types/api-types"
import { user } from "../../types/types"

const server = import.meta.env.VITE_SERVER

export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/user/` }), 
    endpoints: (builder) => ({
        login: builder.mutation<MessageResponse,user>({
            query: (user) => ({
                url: "new",
                method: "POST",
                body: user
            })
        })
    })
})

export const {useLoginMutation} = userAPI
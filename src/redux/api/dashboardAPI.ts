import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { server } from './userAPI'
import { PieResponse, StatsResponse } from "../../types/api-types"
export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/dashboard/` }),
    endpoints: (builder) => ({
        stats: (builder.query<StatsResponse, string>({
            query: (id) => `stats?id=${id}`,
        })),
        pie: (builder.query<PieResponse, string>({
            query: (id) => `pie?id=${id}`,
        })),
        bar: (builder.query<string, string>({
            query: (id) => `bar?id=${id}`,
        })),
        line: (builder.query<string, string>({
            query: (id) => `line?id=${id}`,
        }))
    })
})

export const {
    useBarQuery, useLineQuery, usePieQuery, useStatsQuery
} = dashboardApi


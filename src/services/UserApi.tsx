import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { User } from '../types/User'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `users`,
    }),
    getUser: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = userApi

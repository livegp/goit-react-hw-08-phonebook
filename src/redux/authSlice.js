import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: formData => ({
        url: 'users/signup',
        method: 'POST',
        body: formData,
      }),
    }),
    loginUser: builder.mutation({
      query: formData => ({
        url: 'users/login',
        method: 'POST',
        body: formData,
      }),
    }),
    logOutUser: builder.mutation({
      query: () => 'users/logout',
    }),
    refreshUser: builder.query({
      query: () => 'users/current',
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
  useRefreshUserQuery,
} = authApi;

export default authApi;

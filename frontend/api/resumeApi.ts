import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const resumeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND,
    credentials: "include",
    prepareHeaders: (headers, {}) => {
      headers.set("X-CSRFToken", Cookies.get("csrftoken") ?? "");
      return headers;
    },
  }),
  reducerPath: "resume",
  tagTypes: ["resume"],
  endpoints: (builder) => ({
    getResumeList: builder.query({
      query: () => ({
        url: "resume-list/",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["resume"],
    }),
    getResumeItem: builder.query({
      query: ({ id }) => ({
        url: `resume-item/view/${id}/`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["resume"],
    }),
    createResumeItem: builder.mutation({
      query: (payload) => ({
        url: "resume-item/create/",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
      invalidatesTags: ["resume"],
    }),
    updateResumeItem: builder.mutation({
      query: (payload) => ({
        url: `resume-item/update/${payload.id}/`,
        method: "PUT",
        body: payload,
        credentials: "include",
      }),
      invalidatesTags: ["resume"],
    }),
    deleteResumeItem: builder.mutation({
      query: ({ id }) => ({
        url: `resume-item/update/${id}/`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["resume"],
    }),
  }),
});

export const {
  useLazyGetResumeListQuery,
  useLazyGetResumeItemQuery,
  useCreateResumeItemMutation,
  useUpdateResumeItemMutation,
  useDeleteResumeItemMutation,
} = resumeApi;

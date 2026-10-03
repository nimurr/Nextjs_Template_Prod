import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IMAGE_URL as Url} from "./forImageUrl";

export const baseApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${Url}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token from your store or local storage
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User",],
  endpoints: () => ({}),
});

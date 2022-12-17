import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const githubAPI = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints(build) {
    return {
      searchUsers: build.query({
        query: () => ({
          url: 'search/users',
        }),
      }),
    }
  },
})

export default githubAPI

const { useSearchUsersQuery } = githubAPI

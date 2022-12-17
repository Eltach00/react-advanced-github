import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, ServerResponse } from '../../models/models'

const githubAPI = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints(build) {
    return {
      searchUsers: build.query<IUser[], string>({
        query: (search: string) => ({
          url: 'search/users',
          params: {
            q: search,
            per_page: 10,
          },
        }),
        transformResponse: (response: ServerResponse<IUser>) => response.items,
      }),
    }
  },
})

export default githubAPI

export const { useSearchUsersQuery } = githubAPI

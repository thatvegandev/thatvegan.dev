import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('https://api.github.com/graphql').setHeaders({
  Authorization: `bearer ${process.env.PERSONAL_GITHUB_TOKEN}`,
})

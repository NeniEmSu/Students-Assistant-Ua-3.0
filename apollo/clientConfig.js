// eslint-disable-next-line semi
import { InMemoryCache } from 'apollo-cache-inmemory';
export default function (context) {
  return {
    httpLinkOptions: {
      uri:
        'https://cms.studentsassistantua.com/api/graphql/query?token=dbb9ed69aae53ff12694cd66c5e834',
      // 'https://students-assistant-gql.herokuapp.com/v1/graphql',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: null
  }
}

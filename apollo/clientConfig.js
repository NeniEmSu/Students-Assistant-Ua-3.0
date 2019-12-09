// eslint-disable-next-line semi
import { InMemoryCache } from 'apollo-cache-inmemory';
export default function (context) {
  return {
    httpLinkOptions: {
      uri:
        'https://neniemsu.xyz/api/graphql/query?token=d5eea19d08a160cbdfa78c2efe0720',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: null
  }
}

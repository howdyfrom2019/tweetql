import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
      {
          summoner(name: "hide on bush") {
              id
              name
              puuid
          }
      }
  `,
}).then(data => console.log(data))
.catch(e => console.log(e));

export default client;
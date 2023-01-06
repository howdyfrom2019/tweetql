import { ApolloServer, gql } from 'apollo-server';
import { SummonerType } from './type/type.js';
import { LOLResolver } from './resolver/resolver.js';
import dotenv from 'dotenv';

dotenv.config();

const RootSchema = gql`
  type Query {
      root: String
  }
`;

const RootResolver = {
  Query: {
    root: () => 'Root is running!'
  }
}

const server = new ApolloServer({ typeDefs: [RootSchema, SummonerType], resolvers: [RootResolver, LOLResolver] });

server.listen().then(({ url }) => {
  console.log(url);
})
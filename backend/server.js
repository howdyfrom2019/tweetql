// import {ApolloServer, gql} from "apollo-server";
//
// let tweets = [
//   {
//     id: "1",
//     text: "hello",
//     userId: "2",
//   },
//   {
//     id: "2",
//     text: "hi",
//     userId: "1",
//   },
//   {
//     id: "3",
//     text: "안녕",
//     userId: "2",
//   }
// ];
//
// let users = [
//   {
//     id: "1",
//     username: "성주"
//   },
//   {
//     id: "2",
//     username: "민지"
//   }
// ];
//
// const typeDefs = gql`
//     type User {
//         id: ID!
//         username: String!
//         nickname: String!
//     }
//     """
//     Tweet Object requires what you wanna say and author.
//     """
//     type Tweet {
//         id: ID!
//         text: String!
//         author: User
//     }
//     type Query {
//         allUsers: [User!]!
//         allTweets: [Tweet!]!
//         tweet(id: ID!): Tweet
//         ping: String!
//     }
//     type Mutation {
//         postTweet(text: String!, userId: ID!): Tweet!
//         deleteTweet(id: ID!): Boolean!
//     }
// `;
//
// const resolvers = {
//   Query: {
//     allTweets() {
//       return tweets;
//     },
//     tweet(root, {id}) {
//       return tweets.find(tweet => tweet.id === id);
//     },
//     allUsers() {
//       return users;
//     },
//   },
//   Mutation: {
//     postTweet(_, { text, userId }) {
//       const newTweet = { id : String(tweets.length + 1) , text: String(text), userId };
//       tweets.push(newTweet);
//
//       return newTweet;
//     },
//     deleteTweet(_, { id }) {
//       const tweet = tweets.find(tweet => tweet.id === id);
//       if (!tweet) return false;
//       tweets = tweets.filter(tweet => tweet.id !== id);
//       return true;
//     },
//   },
//   User: {
//     nickname(root) {
//       console.log(root);
//       return "jake";
//     }
//   },
//   Tweet: {
//     author({ userId }) {
//       return users.find(user => user.id === userId);
//     }
//   }
// }
// const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers })
//
// server.listen().then(({url}) => {
//   console.log(url);
// })
import { gql } from 'apollo-server';

export const SummonerType = gql`
  type SummonerInfo {
      id: String!
      accountId: String!
      puuid: String!
      name: String!
      profileIconId: Int!
      revisionDate: Float!
      summonerLevel: Int!
  }
  
  type miniSeriesType {
      target: Int!
      wins: Int!
      losses: Int!
      progress: String!
  }
  
  type LeagueInfo {
      leagueId: String!
      tier: String!
      rank: String!
      summonerId: String!
      summonerName: String!
      leaguePoints: Int!
      wins: Int!
      losses: Int!
      veteran: Boolean!
      inactive: Boolean!
      hotStreak: Boolean!
      miniSeries: miniSeriesType!
  }
  
  type ChampionInfo {
      type: String!
      format: String!
      version: String!
  }
  
  extend type Query {
      summoner(name: String!): SummonerInfo!
      league(encryptedSummonerId: String!): LeagueInfo!
      latestVersion: [String!]!
  }
`;
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
  
  type ChampionSpecification {
      attack: Int!
      defense: Int!
      magic: Int!
      difficulty: Int!
  }
  
  type ChampionImgInfo {
      full: String!
      sprite: String!
      group: String!
      x: Int!
      y: Int!
      w: Int!
      h: Int!
  }
  
  type ChampionStat {
      hp: Int!
      hpperlevel: Float!
      mp: Float!
      mpperlevel: Float!
      movespeedd: Int
      armor: Int!
      armorperlevel: Float!
      spellblock: Int!
      spellblockperlevel: Float!
      attackrange: Int!
      hpregen: Float!
      hpregenperlevel: Float!
      mpregen:Float!
      mpregenperlevel:Float!
      crit: Int!
      critperlevel:Int! 
      attackdamage:Int!
      attackdamageperlevel:Float!
      attackspeedperlevel:Float!
      attackspeed:Float!
  }
  
  type ChampionInfo {
      version: String!
      id: ID!
      key: Int!
      title: String!
      blurb: String!
      info: ChampionSpecification!
      image: ChampionImgInfo!
      tags: [String!]!
      partype: String!
      stats: ChampionStat!
  }
  
  extend type Query {
      summoner(name: String!): SummonerInfo!
      league(encryptedSummonerId: String!): LeagueInfo!
      latestVersion: [String!]!
      allChampion(version: String!): [ChampionInfo]!
  }
`;
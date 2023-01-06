import getSummonerInfo from '../api/getSummonerInfo.js';

export const LOLResolver = {
  Query: {
    summoner: (_, { name }) => getSummonerInfo(name)
  }
}
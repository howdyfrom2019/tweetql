import getSummonerInfo from '../api/getSummonerInfo.js';
import getLatestPatchVersion from '../api/cdn/getLatestPatchVersion.js';

export const LOLResolver = {
  Query: {
    summoner: (_, { name }) => getSummonerInfo(name),
    latestVersion: () => getLatestPatchVersion(),
  }
}
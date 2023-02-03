import getSummonerInfo from '../api/getSummonerInfo.js';
import getLatestPatchVersion from '../api/cdn/getLatestPatchVersion.js';
import getAllChampionInfo from '../api/cdn/getAllChampionInfo.js';
import getOneChampionInfo from '../api/cdn/getOneChampionInfo.js';

export const LOLResolver = {
  Query: {
    summoner: (_, { name }) => getSummonerInfo(name),
    latestVersion: () => getLatestPatchVersion(),
    allChampion: (_, { version }) => getAllChampionInfo(version),
    oneChampionInfo: (_, { version, name }) => getOneChampionInfo(version, name)
  }
}
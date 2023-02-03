import fetch from 'node-fetch';

export default async function getOneChampionInfo(version, championId) {
  const rowData = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${championId}.json`, {
    method: "GET",
    headers: {
      "Content-Type": 'application/json'
    },
    credentials: 'same-origin',
    mode: 'cors'
  });

  const { data } = await rowData.json();
  return data[championId];
}
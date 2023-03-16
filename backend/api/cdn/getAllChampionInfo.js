import fetch from 'node-fetch';

export default async function getAllChampionInfo(version) {
  const rowData = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
    },
    credentials: 'same-origin',
    mode: 'cors',
  });

  const { data } = await rowData.json();
  const dataWithChampionId = [];
  for (const champion in data) {
    const { key, ...props } = data[champion];
    const index = Number(key);
    dataWithChampionId[index] = { key, ...props };
  }

  return dataWithChampionId.filter(Boolean);
}

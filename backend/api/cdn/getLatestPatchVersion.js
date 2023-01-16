import fetch from 'node-fetch';

export default async function getLatestPatchVersion() {
  const version = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', {
    method: "GET",
    headers: {
      "Content-Type": 'application/json'
    },
    credentials: 'same-origin',
    mode: 'cors'
  });
  return await version.json();
}
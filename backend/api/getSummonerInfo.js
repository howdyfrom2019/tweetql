export default async function getSummonerInfo(nickname) {
  const data = await fetch(`${process.env.RIOT_URL}/summoner/v4/summoners/by-name/${nickname}`, {
    method: "GET",
    headers: {
      "X-Riot-Token": `${process.env.API_KEY}`,
      "Content-Type": 'application/json'
    },
    credentials: 'same-origin',
    mode: 'cors'
  });
  const res = await data.json();
  console.log(res);
  return res;
}
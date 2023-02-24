import React from 'react';
import { ChampionType } from '../type/type';
import withLatestVersion from '../utils/withSelectedVersion';
import PlayerPick from '../components/BanPick/PlayerPick';

const Draft = ({...props}) => {
  console.log(props);
  return (
    <div className={'flex flex-col relative'}>
      <main className={'flex h-[1000px]'}>hi</main>
      <article className={'flex flex-col sticky left-0 bottom-0 w-screen min-w-[1200px]'}>
        <div className={'w-[300px] h-[64px] bg-blue-600'} />
        <div className={'flex w-full bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
          <PlayerPick isPickPhase={false} lane={'TOP'} isBlue />
          <PlayerPick isPickPhase={false} lane={'JUG'} isBlue />
          <PlayerPick isPickPhase={false} lane={'MID'} isBlue />
          <PlayerPick isPickPhase={false} lane={'BOT'} isBlue />
          <PlayerPick isPickPhase={false} lane={'SUP'} isBlue />

        </div>
      </article>
    </div>
  )
}

export default withLatestVersion(Draft);

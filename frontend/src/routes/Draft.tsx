import React, { useCallback, useState } from 'react';
import { ChampionType } from '../type/type';
import withLatestVersion from '../utils/withSelectedVersion';
import PlayerPick from '../components/BanPick/PlayerPick';
import ChampionPicks from '../components/BanPick/ChampionPicks';
import ChampionHandler from '../components/BanPick/ChampionHandler';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const Draft = ({...props}) => {
  const [selectedChampion, setSelectedChampion] = useState('');

  const onChangePortrait = useCallback((id: string) => {
    setSelectedChampion(id);
  }, []);

  return (
    <div className={'flex flex-col relative'}>
      <header className={'flex w-full'}>
        <MusicPlayer playlist={[{ src: '', fileName: 'test' }]} />
      </header>
      <main className={'flex flex-col justify-center items-center'}>
        <ChampionHandler />
        <ChampionPicks portraitHandler={onChangePortrait} />
      </main>
      <article className={'flex flex-col sticky left-0 bottom-0 w-screen min-w-[1200px] z-50'}>
        <section className={'flex justify-between'}>
          <div className={'w-[300px] h-[64px] bg-blue-600'} />
          <div className={'w-[300px] h-[64px] bg-[#E1E3E0]'} />
        </section>
        <section className={'flex justify-between'}>
          <div className={'flex flex-1 bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            <PlayerPick isPickPhase={false} lane={'TOP'} isBlue />
            <PlayerPick isPickPhase={false} lane={'JUG'} isBlue />
            <PlayerPick isPickPhase={false} lane={'MID'} isBlue />
            <PlayerPick isPickPhase={false} lane={'BOT'} isBlue />
            <PlayerPick isPickPhase={false} lane={'SUP'} isBlue />
          </div>
          <div className={'flex flex-1 justify-end bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            <PlayerPick isPickPhase={false} lane={'TOP'} isBlue={false} />
            <PlayerPick isPickPhase={false} lane={'JUG'} isBlue={false} />
            <PlayerPick isPickPhase={false} lane={'MID'} isBlue={false} />
            <PlayerPick isPickPhase={false} lane={'BOT'} isBlue={false} />
            <PlayerPick isPickPhase={false} lane={'SUP'} isBlue={false} />
          </div>
        </section>
      </article>
    </div>
  )
}

export default withLatestVersion(Draft);

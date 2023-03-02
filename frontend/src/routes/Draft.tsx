import React, { useCallback, useMemo, useState } from 'react';
import withLatestVersion from '../utils/withSelectedVersion';
import PlayerPick from '../components/BanPick/PlayerPick';
import ChampionPicks from '../components/BanPick/ChampionPicks';
import ChampionHandler from '../components/BanPick/ChampionHandler';
import MusicPlayer, { PlayListProps } from '../components/MusicPlayer/MusicPlayer';
import Selector from '../components/Selector/Selector';
import { useMp3Loader } from '../hooks/useMp3Loader';
import PlayerBan from '../components/BanPick/PlayerBan';
import { ChampionType } from '../type/type';
import Button from '../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoredStateType } from '../store/reducers/RootReducer';
import { addBannedChampion } from '../store/reducers/Banned';

type DraftPhase = 'BAN' | 'PICK';

const musicTitles = ['Bitten Bullet'];

const Draft = ({ ...props }) => {
  const dispatch = useDispatch();
  const { data: ltsPatch } = props;
  const [currentPhase, setCurrentPhase] = useState<DraftPhase>('BAN');
  const [stepPhase, setStepPhase] = useState(0);
  const [selectedChampion, setSelectedChampion] = useState<ChampionType | null>(null);
  const [bannedChampions, setBannedChampions] = useState<ChampionType[]>([]);
  const banned = useSelector<RootStoredStateType>((state) => state.banned);
  const [selectedChampions, setSelectedChampions] = useState<ChampionType[]>([]);
  const [mp3Files] = useMp3Loader();
  console.log(banned);

  const phaseUIText = useMemo(() => {
    switch (currentPhase) {
      case 'BAN':
        return '금지';
      case 'PICK':
        return '선택';
      default:
        return '의도치 않은 동작';
    }
  }, [currentPhase]);
  const playlists = useMemo<PlayListProps[]>(() => mp3Files.map((src, i) => ({
    src,
    fileName: musicTitles[i],
  })), [mp3Files]);

  const onFixChampionSelectInfo = useCallback(() => {
    if (selectedChampion === null) return;
    if (currentPhase === 'BAN') {
      dispatch(addBannedChampion({ team: 'BLUE', champion: selectedChampion }));
      setBannedChampions((prev) => [...prev, selectedChampion]);
    } else if (currentPhase === 'PICK') {
      setSelectedChampions((prev) => [...prev, selectedChampion]);
    }
    setStepPhase((prev) => prev + 1);
  }, [selectedChampion, currentPhase]);

  const onClickSelectButtonHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onFixChampionSelectInfo();
    setSelectedChampion(null);
  }, [onFixChampionSelectInfo]);

  const getLOLBanPortrait = useCallback((phase: number) => {
    if (stepPhase === phase) {
      if (selectedChampion === null) return '';
      return selectedChampion.image.full;
    } else {
      return bannedChampions[phase] && bannedChampions[phase].image.full;
    }
  }, [stepPhase, selectedChampion, bannedChampions]);

  return (
    <div className={'flex flex-col relative mt-8 no-scroll'}>
      <header className={'flex w-full max-w-screen-xl justify-between items-center mx-auto'}>
        <Selector<string>
          categories={[{ id: 0, content: '2022 WORLDS' }]}
          initId={0}
          customSelectorItemStyle={'rounded-full bg-section px-4 py-2 w-40 text-white text-bold'}
        />
        <div className={'flex flex-col gap-4 items-center'}>
          <span className={'font-bold-32 text-white'}>챔피언을 {phaseUIText}할 차례입니다!</span>
          <span className={'font-medium-32 text-white'}>59</span>
        </div>
        <MusicPlayer playlist={playlists} />
      </header>
      <main className={'flex flex-col justify-center items-center'}>
        <ChampionHandler />
        <ChampionPicks portraitHandler={(champion) => setSelectedChampion(champion)} />
        <Button
          onClick={onClickSelectButtonHandler}>
          선택하기
        </Button>
      </main>
      <article className={'flex flex-col sticky left-0 bottom-0 w-screen min-w-[1200px] z-50'}>
        <section className={'flex justify-between'}>
          <div className={'flex bg-blue-600 gap-[-1px]'}>
            <PlayerBan
              patch={ltsPatch}
              blueTeam
              image={getLOLBanPortrait(0)}
              disabled={Boolean(bannedChampions[0]) || stepPhase < 0} />
            <PlayerBan
              patch={ltsPatch}
              blueTeam
              image={getLOLBanPortrait(2)}
              disabled={Boolean(bannedChampions[2]) || stepPhase < 2} />
            <PlayerBan
              patch={ltsPatch}
              blueTeam
              image={getLOLBanPortrait(4)}
              disabled={Boolean(bannedChampions[4]) || stepPhase < 4} />
            <PlayerBan
              patch={ltsPatch}
              blueTeam
              image={getLOLBanPortrait(7)}
              disabled={Boolean(bannedChampions[7]) || stepPhase < 13} />
            <PlayerBan
              patch={ltsPatch}
              blueTeam
              image={getLOLBanPortrait(9)}
              disabled={Boolean(bannedChampions[9]) || stepPhase < 15} />
          </div>
          <div className={'flex bg-[#E1E3E0] gap-[-1px]'}>
            <PlayerBan
              patch={ltsPatch}
              image={getLOLBanPortrait(1)}
              blueTeam={false}
              disabled={Boolean(bannedChampions[1]) || stepPhase < 1} />
            <PlayerBan
              patch={ltsPatch}
              image={getLOLBanPortrait(3)}
              blueTeam={false}
              disabled={Boolean(bannedChampions[3]) || stepPhase < 3} />
            <PlayerBan
              patch={ltsPatch}
              image={getLOLBanPortrait(5)}
              blueTeam={false}
              disabled={Boolean(bannedChampions[5]) || stepPhase < 5} />
            <PlayerBan
              patch={ltsPatch}
              image={getLOLBanPortrait(6)}
              blueTeam={false}
              disabled={Boolean(bannedChampions[6]) || stepPhase < 12} />
            <PlayerBan
              patch={ltsPatch}
              image={getLOLBanPortrait(8)}
              blueTeam={false}
              disabled={Boolean(bannedChampions[8]) || stepPhase < 14} />
          </div>
        </section>
        <section className={'flex justify-between'}>
          <div className={'flex flex-1 bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            <PlayerPick disabled={false} lane={'TOP'} isBlue />
            <PlayerPick disabled={true} lane={'JUG'} isBlue />
            <PlayerPick disabled={true} lane={'MID'} isBlue />
            <PlayerPick disabled={true} lane={'BOT'} isBlue />
            <PlayerPick disabled={true} lane={'SUP'} isBlue />
          </div>
          <div className={'flex flex-1 justify-end bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            <PlayerPick disabled={true} lane={'TOP'} isBlue={false} />
            <PlayerPick disabled={true} lane={'JUG'} isBlue={false} />
            <PlayerPick disabled={true} lane={'MID'} isBlue={false} />
            <PlayerPick disabled={true} lane={'BOT'} isBlue={false} />
            <PlayerPick disabled={true} lane={'SUP'} isBlue={false} />
          </div>
        </section>
      </article>
    </div>
  );
};

export default withLatestVersion(Draft);

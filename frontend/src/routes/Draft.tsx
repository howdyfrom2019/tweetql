import React, { useCallback, useEffect, useMemo, useState } from 'react';
import withLatestVersion from '../utils/withSelectedVersion';
import PlayerPick from '../components/BanPick/PlayerPick';
import ChampionPicks from '../components/BanPick/ChampionPicks';
import ChampionHandler from '../components/BanPick/ChampionHandler';
import MusicPlayer, { PlayListProps } from '../components/MusicPlayer/MusicPlayer';
import Selector from '../components/Selector/Selector';
import { useMp3Loader } from '../hooks/useMp3Loader';
import PlayerBan from '../components/BanPick/PlayerBan';
import { ChampionsByTeam, ChampionType, TEAM_TYPE } from '../type/type';
import Button from '../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoredStateType } from '../store/reducers/RootReducer';
import { addBlue, addRed } from '../store/reducers/Banned';

type DraftPhase = 'BAN' | 'PICK';

const musicTitles = ['Bitten Bullet'];

const Draft = ({ ...props }) => {
  const dispatch = useDispatch();
  const { data: ltsPatch } = props;
  const [currentPhase, setCurrentPhase] = useState<DraftPhase>('BAN');
  const [selectedChampion, setSelectedChampion] = useState<ChampionType | null>(null);
  const { blue: blueBannedChampions, red: redBannedChampions } = useSelector<RootStoredStateType, ChampionsByTeam>((state) => state.banned);
  const [mp3Files] = useMp3Loader();

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

  const onFixChampionSelectInfo = useCallback((team: TEAM_TYPE) => {
    if (selectedChampion === null) return;
    if (currentPhase === 'BAN') {
      switch (team) {
        case 'BLUE':
          dispatch(addBlue(selectedChampion));
          break;
        case 'RED':
          dispatch(addRed(selectedChampion));
      }
    } else if (currentPhase === 'PICK') {

    }
  }, [selectedChampion, currentPhase]);

  const getCurrentBanOrder = useCallback((): TEAM_TYPE => {
    const blues = blueBannedChampions.length;
    const reds = redBannedChampions.length;

    if (blues <= 3 && reds < 3) {
      return blues - reds === 0 ? 'BLUE' : 'RED';
    } else {
      return reds - blues === 0 ? 'RED' : 'BLUE';
    }

  }, [blueBannedChampions, redBannedChampions])

  const onClickSelectButtonHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onFixChampionSelectInfo(getCurrentBanOrder());
    setSelectedChampion(null);
  }, [onFixChampionSelectInfo]);

  const getCurrentBanDisability = useCallback((type: TEAM_TYPE, index: number) => {
    if (currentPhase === 'PICK') return true;
    const blues = blueBannedChampions.length;
    const reds = redBannedChampions.length;

    if (index >= 3) {
      if (type === 'RED') return blues !== index || reds !== index;
      return blues !== index || reds !== index + 1;
    } else {
      if (type === 'BLUE') return blues !== index || reds !== index;
      return blues !== index + 1 || reds !== index;
    }
  }, [currentPhase, blueBannedChampions, redBannedChampions])

  const getBannedChampions = useCallback((bannedArr: (ChampionType | null)[], type: TEAM_TYPE, index: number) => {
    const n = bannedArr.length;
    if (!getCurrentBanDisability(type, index)) {
      return selectedChampion === null ? '' : selectedChampion.image.full;
    }

    if (index > n) return '';
    return bannedArr[index]?.image.full;
  }, [selectedChampion]);

  const getLOLBanPortrait = useCallback((type: TEAM_TYPE, index: number) => {
    switch (type) {
      case 'BLUE':
        return getBannedChampions(blueBannedChampions, type, index);
      case 'RED':
        return getBannedChampions(redBannedChampions, type, index);
      default:
        return '';
    }
  }, [selectedChampion, blueBannedChampions, redBannedChampions]);

  const getLOLPickPortrait = useCallback((type: TEAM_TYPE, index: number) => {

  }, []);

  useEffect(() => {
    const blues = blueBannedChampions.length;
    const reds = redBannedChampions.length;

    if (blues === 3 && reds === 3) {
      setCurrentPhase('PICK');
    }
  }, [blueBannedChampions, redBannedChampions]);

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
            {
              Array.from({ length: 5 }, (_, i) => (
                <PlayerBan
                  patch={ltsPatch}
                  blueTeam
                  image={getLOLBanPortrait('BLUE', i)}
                  disabled={getCurrentBanDisability('BLUE', i)}
                />
              ))
            }
          </div>
          <div className={'flex bg-[#E1E3E0] gap-[-1px]'}>
            {
              Array.from({ length: 5 }, (_, i) => (
                <PlayerBan
                  patch={ltsPatch}
                  blueTeam={false}
                  image={getLOLBanPortrait('RED', i)}
                  disabled={getCurrentBanDisability('RED', i)}
                />
              ))
            }
          </div>
        </section>
        <section className={'flex justify-between'}>
          <div className={'flex flex-1 bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            <PlayerPick image={'Aatrox'} disabled={false} lane={'TOP'} isBlue />
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

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import withLatestVersion from '@/utils/withSelectedVersion';
import PlayerPick from '@/components/BanPick/PlayerPick';
import ChampionPicks from '@/components/BanPick/ChampionPicks';
import ChampionHandler from '@/components/BanPick/ChampionHandler';
import MusicPlayer, { PlayListProps } from '@/components/MusicPlayer/MusicPlayer';
import Selector from '@/components/Selector/Selector';
import { useMp3Loader } from '@/hooks/useMp3Loader';
import PlayerBan from '@/components/BanPick/PlayerBan';
import { ChampionsByTeam, ChampionType, LANE_TYPE, TEAM_TYPE } from '@/type/type';
import Button from '@/components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/reducers/RootReducer';
import { addBanBlue, addBanRed } from '@/store/reducers/Banned';
import { addPickBlue, addPickRed } from '@/store/reducers/Picked';
import SecondTimer from '@/components/Timer/SecondTimer';

type DraftPhase = 'BAN' | 'PICK';

const musicTitles = ['Bitten Bullet'];
const PICK_ORDER: LANE_TYPE[] = ['TOP', 'JUG', 'MID', 'BOT', 'SUP'];

const Draft = ({ ...props }) => {
  const dispatch = useDispatch();
  const { data: ltsPatch } = props;
  const [currentPhase, setCurrentPhase] = useState<DraftPhase>('BAN');
  const [selectedChampion, setSelectedChampion] = useState<ChampionType | null>(null);
  const {
    blue: blueBannedChampions,
    red: redBannedChampions,
  } = useSelector<RootState, ChampionsByTeam>((state) => state.banned);
  const {
    blue: bluePickedChampions,
    red: redPickedChampions,
  } = useSelector<RootState, ChampionsByTeam>((state) => state.picked);
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

  const onFixChampionSelectInfo = useCallback((mistake: boolean) => {
    if (mistake && selectedChampion === null) return;

    const team = currentPhase === 'BAN' ? getCurrentBanOrder() : getCurrentPickOrder();

    if (currentPhase === 'BAN') {
      switch (team) {
        case 'BLUE':
          dispatch(addBanBlue(selectedChampion));
          break;
        case 'RED':
          dispatch(addBanRed(selectedChampion));
          break;
      }
    } else if (currentPhase === 'PICK') {
      switch (team) {
        case 'BLUE':
          dispatch(addPickBlue(selectedChampion));
          break;
        case 'RED':
          dispatch(addPickRed(selectedChampion));
          break;
      }
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

  }, [blueBannedChampions, redBannedChampions]);

  const getCurrentPickOrder = useCallback((): TEAM_TYPE => {
    const blues = bluePickedChampions.length;
    const reds = redPickedChampions.length;

    if (blues === 0 && reds === 0) return 'BLUE';
    else if (blues === 1 && reds < 2) return 'RED';
    else if (reds === 2 && blues < 3) return 'BLUE';
    else if (blues === 3 && reds < 4) return 'RED';
    else if (reds === 4 && blues < 5) return 'BLUE';
    return 'RED';
  }, [bluePickedChampions, redPickedChampions]);

  const onClickSelectButtonHandler = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    onFixChampionSelectInfo(Boolean(e));
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
  }, [currentPhase, blueBannedChampions, redBannedChampions]);

  const getCurrentPickDisability = useCallback((type: TEAM_TYPE, index: number) => {
    if (currentPhase === 'BAN') return true;

    const blues = bluePickedChampions.length;
    const reds = redPickedChampions.length;
    // 블루픽: (blues, reds) =>  0, 0 / 1, 2 / 2, 2 / 3, 4 / 4, 4
    // 레드픽: (blues, reds) =>  1, 0 / 1, 1 / 3, 2 / 3, 3 / 5, 4
    const query = `${blues}${reds}`;

    if (type === 'BLUE') return !(index === blues && ['00', '12', '22', '34', '44'].includes(query));
    else return !(index === reds && ['10', '11', '32', '33', '54'].includes(query));
  }, [currentPhase, bluePickedChampions, redPickedChampions]);

  const getBannedChampions = useCallback((bannedArr: (ChampionType | null)[], type: TEAM_TYPE, index: number) => {
    const n = bannedArr.length;
    if (!getCurrentBanDisability(type, index)) {
      return selectedChampion === null ? '' : selectedChampion.image.full;
    }

    if (index > n) return '';
    return bannedArr[index]?.image.full;
  }, [selectedChampion]);

  const getPickedChampions = useCallback((pickedArr: (ChampionType | null)[], type: TEAM_TYPE, index: number) => {
    const n = pickedArr.length;
    if (!getCurrentPickDisability(type, index)) {
      return selectedChampion === null ? '' : selectedChampion.id;
    }
    if (index > n) return '';
    return pickedArr[index]?.id;
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
    switch (type) {
      case 'BLUE':
        return getPickedChampions(bluePickedChampions, type, index);
      case 'RED':
        return getPickedChampions(redPickedChampions, type, index);
      default:
        return '';
    }
  }, [selectedChampion, bluePickedChampions, redPickedChampions]);

  useEffect(() => {
    const banBlues = blueBannedChampions.length;
    const banReds = redBannedChampions.length;
    const pickBlues = bluePickedChampions.length;
    const pickReds = redPickedChampions.length;

    if (banBlues === 3 && banReds === 3) {
      if (pickBlues === 3 && pickReds === 3) {
        setCurrentPhase('BAN');
      } else {
        setCurrentPhase('PICK');
      }
    } else if (banBlues === 5 && banReds === 5) {
      setCurrentPhase('PICK');
    }
  }, [
    blueBannedChampions.length,
    redBannedChampions.length,
    bluePickedChampions.length,
    redPickedChampions.length,
  ]);

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
          <SecondTimer callback={onClickSelectButtonHandler} />
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
                  key={`blue_banned+${i}`}
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
                  key={`red_banned+${i}`}
                />
              ))
            }
          </div>
        </section>
        <section className={'flex justify-between'}>
          <div className={'flex flex-1 bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            {
              Array.from({ length: 5 }, (_, i) => (
                <PlayerPick
                  disabled={getCurrentPickDisability('BLUE', i)}
                  lane={PICK_ORDER[i]}
                  image={getLOLPickPortrait('BLUE', i)}
                  isBlue
                  key={`blue_picked+${i}`}
                />
              ))
            }
          </div>
          <div className={'flex flex-1 justify-end bg-[#111110] border-t-2 border-lolYellow h-[180px]'}>
            {
              Array.from({ length: 5 }, (_, i) => (
                <PlayerPick
                  disabled={getCurrentPickDisability('RED', i)}
                  lane={PICK_ORDER[i]}
                  image={getLOLPickPortrait('RED', i)}
                  isBlue={false}
                  key={`red_picked+${i}`}
                />
              ))
            }
          </div>
        </section>
      </article>
    </div>
  );
};

export default withLatestVersion(Draft);

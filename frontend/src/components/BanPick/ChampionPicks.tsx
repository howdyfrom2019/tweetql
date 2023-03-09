import React, { useMemo } from 'react';
import withLatestVersion, { WithSelectedVersionProps } from '../../utils/withSelectedVersion';
import { useQuery } from '@apollo/client';
import { ChampionsByTeam, ChampionType, DataState } from '../../type/type';
import { ALL_CHAMPIONS } from '../../type/api';
import Scrollbars from 'react-custom-scrollbars-2';
import PickPortrait from '../Portrait/PickPortrait';
import DraftBG from '../../assets/draft_outline.png';
import { useSelector } from 'react-redux';
import { RootStoredStateType } from '../../store/reducers/RootReducer';

interface Props extends WithSelectedVersionProps {
  portraitHandler?: (champion: ChampionType) => void;
}

const ChampionPicks = ({ portraitHandler, ...result }: Props) => {
  const { data, error, loading } = result as unknown as DataState<string>;
  const { data: championData, error: championError, loading: championLoading } = useQuery<{ allChampion: ChampionType[]}>(ALL_CHAMPIONS,
    { variables: { version: data || '13.3.1' } });
  const { blue: blueBannedChampions, red: redBannedChampions } = useSelector<RootStoredStateType, ChampionsByTeam>((state) => state.banned);
  const bannedChampionId = useMemo(() => blueBannedChampions.concat(redBannedChampions).map((champion) => champion?.id), [blueBannedChampions, redBannedChampions]);

  return (
    <div className={'relative'}>
      <Scrollbars
        style={{ width: 720, height: 560, zIndex: 10 }}
        hideTracksWhenNotNeeded
        renderView={(props) => <div className={'absolute inset-0 overflow-scroll flex flex-row flex-wrap gap-x-2 gap-y-6 justify-between'} {...props} />}
      >
        {
          !championLoading && championData && championData.allChampion && championData.allChampion.filter(Boolean).map((champion, i) => (
            <PickPortrait
              champion={champion}
              src={`https://ddragon.leagueoflegends.com/cdn/${data || '13.3.1'}/img/champion/${champion.image.full}`}
              key={champion.id}
              callback={portraitHandler}
              disabled={bannedChampionId.includes(champion.id)}
            />
          ))
        }
      </Scrollbars>
      <img className={'absolute top-0 left-0 -translate-x-[90%]'} src={DraftBG} alt={'draft'} />
      <img className={'rotate-180 absolute top-0 right-0 translate-x-[90%]'} src={DraftBG} alt={'draft'} />
    </div>
  )
}
export default withLatestVersion<Props>(ChampionPicks);

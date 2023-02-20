import React from 'react';
import withLatestVersion, { WithSelectedVersionProps } from '../../utils/withSelectedVersion';
import { useQuery } from '@apollo/client';
import { ChampionType, DataState } from '../../type/type';
import { ALL_CHAMPIONS } from '../../type/api';
import Scrollbars from 'react-custom-scrollbars-2';
import PickPortrait from '../Portrait/PickPortrait';
import DraftBG from '../../assets/draft_outline.png';

interface Props extends WithSelectedVersionProps {
  portraitHandler?: (id: string) => void;
}

const ChampionPicks = ({ portraitHandler, ...result }: Props) => {
  const { data, error, loading } = result as unknown as DataState<string>;
  const { data: championData, error: championError, loading: championLoading } = useQuery<{ allChampion: ChampionType[]}>(ALL_CHAMPIONS,
    { variables: { version: data || '13.3.1' } });

  return (
    <div className={'relative'}>
      <Scrollbars
        style={{ width: 720, height: 560, zIndex: 10 }}
        renderView={(props) => <div {...props} className={'flex flex-row flex-wrap gap-x-2 gap-y-6 justify-between'} />}
      >
        {
          !championLoading && championData && championData.allChampion && championData.allChampion.filter(Boolean).map((champion, i) => (
            <PickPortrait
              name={champion.id}
              src={`https://ddragon.leagueoflegends.com/cdn/${data || '13.3.1'}/img/champion/${champion.image.full}`}
              key={i}
              // callback={(id) => navigator(`/champion/${id}/version/${result?.data}`)}
              callback={portraitHandler}
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

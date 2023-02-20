import React from 'react';
import withLatestVersion from '../../utils/withSelectedVersion';
import { useQuery } from '@apollo/client';
import { ChampionType } from '../../type/type';
import { ALL_CHAMPIONS } from '../../type/api';
import Scrollbars from 'react-custom-scrollbars-2';
import PickPortrait from '../Portrait/PickPortrait';
import DraftBG from '../../assets/draft_outline.png';
import { useNavigate } from 'react-router-dom';

const ChampionPicks = ({ ...props }) => {
  const navigator = useNavigate();
  const { data, error, loading } = useQuery<{ allChampion: ChampionType[]}>(ALL_CHAMPIONS,
    { variables: { version: props.data } });

  return (
    <div className={'relative'}>
      <Scrollbars
        style={{ width: 720, height: 560, zIndex: 10 }}
        renderView={(props) => <div {...props} className={'flex flex-row flex-wrap gap-x-2 gap-y-6 justify-between'} />}
      >
        {
          !loading && data && data.allChampion && data.allChampion.filter(Boolean).map((champion, i) => (
            <PickPortrait
              name={champion.id}
              src={`https://ddragon.leagueoflegends.com/cdn/${props.data}/img/champion/${champion.image.full}`}
              key={i}
              callback={(id) => navigator(`/champion/${id}/version/${props.data}`)}
            />
          ))
        }
      </Scrollbars>
      <img className={'absolute top-0 left-0 -translate-x-[90%]'} src={DraftBG} alt={'draft'} />
      <img className={'rotate-180 absolute top-0 right-0 translate-x-[90%]'} src={DraftBG} alt={'draft'} />
    </div>
  )
}
export default withLatestVersion(ChampionPicks);

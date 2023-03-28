import React, { useMemo } from 'react';
import withLatestVersion, { WithSelectedVersionProps } from '@/utils/withSelectedVersion';
import { useQuery } from '@apollo/client';
import { ChampionFilterType, ChampionsByTeam, ChampionType, DataState } from '@/type/type';
import { ALL_CHAMPIONS, LOL_PATCH_VERSIONS } from '@/type/api';
import Scrollbars from 'react-custom-scrollbars-2';
import PickPortrait from '../Portrait/PickPortrait';
import DraftBG from '@/assets/draft_outline.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/RootReducer';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { initializeApolloClient } from '@/client';

interface Props extends WithSelectedVersionProps {
  portraitHandler?: (champion: ChampionType) => void;
}

const ChampionPicks = ({ portraitHandler, ...result }: Props) => {
  const { data } = result as unknown as DataState<string>;
  const {
    data: championData,
    loading: championLoading,
  } = useQuery<{ allChampion: ChampionType[] }>(ALL_CHAMPIONS,
    { variables: { version: data || '13.3.1' } });
  const {
    blue: blueBannedChampions,
    red: redBannedChampions,
  } = useSelector<RootState, ChampionsByTeam>((state) => state.banned);
  const {
    blue: bluePickedChampions,
    red: redPickedChampions,
  } = useSelector<RootState, ChampionsByTeam>((state) => state.picked);
  const { order, lane, query } = useSelector<RootState, ChampionFilterType>((state) => state.championFilter);

  const bannedChampionId = useMemo(() => blueBannedChampions.concat(redBannedChampions).map((champion) => champion?.id), [blueBannedChampions, redBannedChampions]);
  const pickedChampionId = useMemo(() => bluePickedChampions.concat(redPickedChampions).map((champion) => champion?.id), [bluePickedChampions, redPickedChampions]);
  const champions = useMemo<ChampionType[]>(() => {
    if (!championData || !championData.allChampion || championLoading) return [];
    const laneFilteredChamp = lane === 'ALL' ?
      championData.allChampion
      : (
        championData.allChampion.filter(({ tags }) => {
          switch (lane) {
            case 'TOP':
              const top = ['Fighter', 'Tank'];
              return tags.some(v => top.includes(v));
            case 'JUG':
              return tags.includes('Fighter');
            case 'MID':
              const mid = ['Mage', 'Assassin'];
              return tags.some(v => mid.includes(v));
            case 'BOT':
              return tags.includes('Marksman');
            case 'SUP':
              return tags.includes('Support');
          }
        })
      );
    if (query.length === 0) {
      return laneFilteredChamp;
    } else {
      return laneFilteredChamp.filter((
        {
          id,
          name,
          blurb,
        }
        ) => id.toLowerCase().includes(query) || name.includes(query)
      );
    }
  }, [championData, championLoading, lane, query]);

  return (
    <div className={'relative'}>
      <Scrollbars
        style={{ width: 720, height: 560, zIndex: 10 }}
        hideTracksWhenNotNeeded
        renderView={(props) => <div
          className={'absolute inset-0 overflow-scroll inline-flex flex-wrap gap-y-6 gap-x-3'} {...props} />}
      >
        {
          champions.map((champion) => (
            <PickPortrait
              className={''}
              champion={champion}
              src={`https://ddragon.leagueoflegends.com/cdn/${data || '13.3.1'}/img/champion/${champion.image.full}`}
              key={champion.id}
              callback={portraitHandler}
              disabled={bannedChampionId.includes(champion.id) || pickedChampionId.includes(champion.id)}
            />
          ))
        }
      </Scrollbars>
      <Image className={'absolute top-0 left-0 -translate-x-[90%]'} src={DraftBG} alt={'draft'} priority={false} />
      <Image className={'rotate-180 absolute top-0 right-0 translate-x-[90%]'} src={DraftBG} alt={'draft'} priority={false} />
    </div>
  );
};
export default withLatestVersion<Props>(ChampionPicks);


export const getStaticProps: GetServerSideProps<{}, {}> = async(ctx) => {
  const client = initializeApolloClient(ctx);

  const { data } = await client.query({
    query: LOL_PATCH_VERSIONS,
  })

  await client.query({
    query: ALL_CHAMPIONS,
    variables: { version: data || '13.6.1' }
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  }
}

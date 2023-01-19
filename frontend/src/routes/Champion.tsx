import React, { Dispatch, useCallback, useReducer, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChampionSideBar from '../components/SideBar/ChampionSideBar';
import { useQuery } from '@apollo/client';
import { ALL_CHAMPIONS } from '../type/api';
import Selector from '../components/Selector/Selector';
import LaneNavigator from '../components/LaneNavigator/LaneNavigator';
import { ChampionFilterType, LANE_TYPE, ORDER_TYPE } from '../type/type';

type CHAMPION_FILTER_ACTION =
  | { type: 'LANE', val: LANE_TYPE }
  | { type: 'ORDER', val: ORDER_TYPE }
  | { type: 'QUERY', val: string }

const filterReducer = (state: ChampionFilterType, action: CHAMPION_FILTER_ACTION): ChampionFilterType => {
  switch(action.type) {
    case 'LANE':
      return {
        ...state,
        lane: action.val
      }
    case 'ORDER':
      return {
        ...state,
        order: action.val
      }
    case 'QUERY':
      return {
        ...state,
        query: action.val
      }
  }
}

const Champion = () => {
  const [selectedVersion, setSelectedVersion] = useState('13.1.1');
  const { data, error, loading } = useQuery(ALL_CHAMPIONS,
    { variables: { version: selectedVersion } });
  const [championFilter, dispatch] = useReducer(filterReducer, { lane: 'ALL', order: 'NAME', query: '' });

  const onChangeLaneFilter = useCallback((val: LANE_TYPE) => {
    dispatch({ type: 'LANE', val: val });
  }, []);

  const onChangeSortFilter = useCallback((val?: ORDER_TYPE) => {
    if (!val) return;
    dispatch({ type: 'ORDER', val: val });
  }, []);

  return (
    <div className={`flex`}>
      <ChampionSideBar selectedVersionCallback={(version) => {
        setSelectedVersion(version);
      }} />
      <article className={'flex flex-col gap-8 mt-10 w-full'}>
        <header className={'flex justify-center gap-6'}>
          <NavLink to={'/'}
                   className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>전적검색</NavLink>
          <NavLink to={'/champion'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>챔피언
            정보</NavLink>
        </header>
        <main className={'flex flex-col gap-6 items-center'}>
          <header className={'flex gap-6 max-w-[720px] justify-between'}>
            <LaneNavigator
              callback={onChangeLaneFilter}
            />
            <section className={'flex gap-4'}>
              <Selector<ORDER_TYPE>
                categories={
                  [
                    { id: 0, content: '이름 순 정렬', customData: 'NAME' },
                    { id: 1, content: 'id 순 정렬', customData: 'ID' },
                    { id: 2, content: '검색한 챔피언 순', customData: 'RECENTLY_SEARCHED' },
                  ]
                }
                initId={0}
                callback={(item) => onChangeSortFilter(item.customData)}
              />
            </section>
          </header>
        </main>
      </article>
    </div>
  );
};

export default Champion;
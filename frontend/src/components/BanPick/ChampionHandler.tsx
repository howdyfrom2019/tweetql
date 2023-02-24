import React, { useCallback, useReducer } from 'react';
import { ChampionFilterType, LANE_TYPE, ORDER_TYPE } from '../../type/type';
import LaneNavigator from '../LaneNavigator/LaneNavigator';
import Selector from '../Selector/Selector';
import Input from '../Input/Input';

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

const ChampionHandler = () => {
  const [championFilter, dispatch] = useReducer(filterReducer, { lane: 'ALL', order: 'NAME', query: '' });
  const onChangeLaneFilter = useCallback((val: LANE_TYPE) => {
    dispatch({ type: 'LANE', val: val });
  }, []);

  const onChangeSortFilter = useCallback((val?: ORDER_TYPE) => {
    if (!val) return;
    dispatch({ type: 'ORDER', val: val });
  }, []);

  return (
    <header className={'flex gap-6 w-[720px] pb-2 justify-between items-center border-b border-b-lolYellow'}>
      <LaneNavigator
        callback={onChangeLaneFilter}
      />
      <section className={'flex gap-4 items-center'}>
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
        <Input className={'flex-1'} showSearchIcon />
      </section>
    </header>
  )
}

export default ChampionHandler;

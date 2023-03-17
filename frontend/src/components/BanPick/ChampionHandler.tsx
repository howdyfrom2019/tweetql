import React, { useCallback, useEffect } from 'react';
import { LANE_TYPE, ORDER_TYPE } from '../../type/type';
import LaneNavigator from '../LaneNavigator/LaneNavigator';
import Selector from '../Selector/Selector';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { changeLane, changeOrder, changeQuery, clear } from '../../store/reducers/ChampionFilter';

const ChampionHandler = () => {
  const dispatch = useDispatch();

  const onChangeLaneFilter = useCallback((val: LANE_TYPE) => {
    dispatch(changeLane(val));
  }, []);

  const onChangeSortFilter = useCallback((val?: ORDER_TYPE) => {
    if (!val) return;
    dispatch(changeOrder(val));
  }, []);

  const onChangeQueryFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(changeQuery(e.target.value.toLowerCase()));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clear());
    }
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
        <Input className={'flex-1'} showSearchIcon onChange={onChangeQueryFilter} />
      </section>
    </header>
  )
}

export default ChampionHandler;

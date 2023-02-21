import React, { Dispatch, useCallback, useMemo, useReducer, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ChampionSideBar from '../components/SideBar/ChampionSideBar';
import { useQuery } from '@apollo/client';
import { ALL_CHAMPIONS } from '../type/api';
import Selector from '../components/Selector/Selector';
import LaneNavigator from '../components/LaneNavigator/LaneNavigator';
import { ChampionFilterType, ChampionType, LANE_TYPE, ORDER_TYPE } from '../type/type';
import Input from '../components/Input/Input';
import PickPortrait from '../components/Portrait/PickPortrait';
import Scrollbars from 'react-custom-scrollbars-2';
import DraftBG from '../assets/draft_outline.png';
import Button from '../components/Button/Button';
import ChampionPicks from '../components/BanPick/ChampionPicks';
import ChampionHandler from '../components/BanPick/ChampionHandler';

const Champion = () => {
  const [selectedVersion, setSelectedVersion] = useState('13.1.1');
  const navigator = useNavigate();

  const navigateToDraft = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator('/draft');
  }, []);

  const moveToDetailChampionPage = useCallback((id: string) => {
    navigator(`/champion/${id}/version/${selectedVersion}`)
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
            정보
          </NavLink>
        </header>
        <main className={'flex flex-col gap-6 items-center'}>
          <ChampionHandler />
          <ChampionPicks portraitHandler={moveToDetailChampionPage} />
          <Button onClick={navigateToDraft}>Draft 모드</Button>
        </main>
      </article>
    </div>
  );
};

export default Champion;

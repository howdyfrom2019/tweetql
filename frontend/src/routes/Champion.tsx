import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChampionSideBar from '../components/SideBar/ChampionSideBar';
import { useQuery } from '@apollo/client';
import { ALL_CHAMPIONS } from '../type/api';
import Selector from '../components/Selector/Selector';

const Champion = () => {
  const [selectedVersion, setSelectedVersion] = useState('13.1.1');
  const { data, error, loading } = useQuery(ALL_CHAMPIONS,
    { variables: { version: selectedVersion } });
  console.log(data, error, loading);

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
            <section className={'flex gap-4'}>
              <span>hi</span>
              <span>hi</span>
              <span>hi</span>
              <span>hi</span>
            </section>
            <section className={'flex gap-4'}>
              <Selector
                categories={
                  [
                    { id: 0, content: '이름 순 정렬' },
                    { id: 1, content: 'id 순 정렬' },
                    { id: 2, content: '검색한 챔피언 순' },
                  ]
                }
                initId={0}
              />
            </section>
          </header>
        </main>
      </article>
    </div>
  );
};

export default Champion;
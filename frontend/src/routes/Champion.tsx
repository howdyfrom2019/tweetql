import React from 'react';
import { NavLink } from 'react-router-dom';
import ChampionSideBar from '../components/SideBar/ChampionSideBar';

const Champion = () => {
  return (
    <div className={`flex flex-col gap-12`}>
      <div className={'flex gap-6 justify-center items-center mt-10'}>
        <NavLink to={'/'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>전적검색</NavLink>
        <NavLink to={'/champion'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>챔피언 정보</NavLink>
      </div>
      <ChampionSideBar selectedVersionCallback={(version) => {
        console.log(version);
      }} />
    </div>
  )
}

export default Champion;
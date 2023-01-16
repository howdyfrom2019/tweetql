import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

interface ChampionSideBarType {
  currentVersion: String;
}

const ChampionSideBar: React.FC<ChampionSideBarType> = ({ currentVersion }) => {
  return (
    <aside className={`sticky top-0 left-0 w-72 h-vh flex flex-col justify-around`}>
      <Logo className={'scale-50'} />
    </aside>
  )
}

export default ChampionSideBar;
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ChampionType, LANE_TYPE } from '../../type/type';
import Top from '../../assets/top_blue.svg';
import Top_Red from '../../assets/top.svg';
import Jungle from '../../assets/jungle_blue.svg';
import Jungle_Red from '../../assets/jungle.svg';
import Mid from '../../assets/mid_blue.svg';
import Mid_Red from '../../assets/mid.svg';
import Bot from '../../assets/bottom_blue.svg';
import Bot_Red from '../../assets/bottom.svg';
import Support from '../../assets/support_blue.svg';
import Support_Red from '../../assets/support.svg';

interface PlayerPickProps {
  disabled: boolean;
  image?: string
  lane: LANE_TYPE;
  playerName?: string;
  isBlue: boolean;
}

const PlayerPick = ({ disabled, image, lane, playerName, isBlue } : PlayerPickProps) => {
  const [path, setPath] = useState('');
  const src = useMemo(() => `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${image}_0.jpg`, [image]);

  const initIcon = useCallback(async() => {
    switch (lane) {
      case 'TOP':
        setPath(isBlue ? Top : Top_Red);
        break;
      case 'JUG':
        setPath(isBlue ? Jungle : Jungle_Red);
        break;
      case 'MID':
        setPath(isBlue ? Mid : Mid_Red);
        break;
      case 'BOT':
        setPath(isBlue ? Bot : Bot_Red);
        break;
      case 'SUP':
        setPath(isBlue ? Support : Support_Red);
        break;
      default:
        throw new Error('invalid lane props');
    }
  }, [lane, isBlue]);

  useEffect(() => {
    initIcon();
  }, []);

  return (
    <div className={`relative flex flex-col justify-between border-r-2 border-[#20201e] w-[116px] px-2 py-6 overflow-hidden`}>
      {image && <img src={src} className={'absolute top-0 left-0 w-full h-full object-cover scale-105'} alt={'loading_art'} />}
      <span className={`absolute top-0 left-0 w-full h-full bg-200% ${disabled ? '' : 'bg-gradient-to-t animate-ban-select'} ${isBlue ? 'from-banRed' : 'from-banBlue'}`} />
      {path}
      <span className={'font-regular-12 text-[#c7c7c7] z-10'}>{playerName ? playerName : lane}</span>
    </div>
  )
}

export default PlayerPick;

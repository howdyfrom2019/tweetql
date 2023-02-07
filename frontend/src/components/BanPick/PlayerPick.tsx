import React, { useCallback, useEffect, useState } from 'react';
import { LANE_TYPE } from '../../type/type';
import Top from '../../assets/top_blue.svg';
import Jungle from '../../assets/jungle_blue.svg';
import Mid from '../../assets/mid_blue.svg';
import Bot from '../../assets/bottom_blue.svg';
import Support from '../../assets/support_blue.svg';

interface PlayerPickProps {
  isPickPhase: boolean;
  championId?: string;
  lane: LANE_TYPE;
  playerName?: string;
  isBlue: boolean;
}

const PlayerPick = ({ isPickPhase, championId, lane, playerName, isBlue } : PlayerPickProps) => {
  const [path, setPath] = useState('');

  const initIcon = useCallback(async() => {
    switch (lane) {
      case 'TOP':
        setPath(Top);
        break;
      case 'JUG':
        setPath(Jungle);
        break;
      case 'MID':
        setPath(Mid);
        break;
      case 'BOT':
        setPath(Bot);
        break;
      case 'SUP':
        setPath(Support);
        break;
      default:
        throw new Error('invalid lane props');
    }
  }, [lane, isBlue]);

  useEffect(() => {
    initIcon();
  }, []);

  return (
    <div className={'flex flex-col justify-between border-r-2 border-[#20201e] w-[116px] px-2 py-6'}>
      {path}
      <span className={'font-regular-12 text-[#c7c7c7]'}>{lane}</span>
    </div>
  )
}

export default PlayerPick;
import React, { useCallback } from 'react';
import { LANE_TYPE } from '../../type/type';

interface PlayerPickProps {
  isPickPhase: boolean;
  championId?: string;
  lane: LANE_TYPE;
  playerName?: string;
}

const PlayerPick = ({ isPickPhase, championId, lane, playerName } : PlayerPickProps) => {


  return (
    <div className={'flex flex-col justify-between border-r-2 border-[#111110] w-[116px] px-2 py-6'}>
      <span className={'font-regular-12 text-[#111110]'}>{lane}</span>
    </div>
  )
}

export default PlayerPick;
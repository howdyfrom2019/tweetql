import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as TopIcon } from '../../assets/top.svg';
import { ReactComponent as JugIcon } from '../../assets/jungle.svg';
import { ReactComponent as MidIcon } from '../../assets/mid.svg';
import { ReactComponent as BotIcon } from '../../assets/bottom.svg';
import { ReactComponent as SupIcon } from '../../assets/support.svg';
import { LANE_TYPE } from '../../type/type';

interface LaneProps {
  callback?: (type: LANE_TYPE) => void;
}

const LaneNavigator: React.FC<LaneProps> = ({ callback }) => {
  const [cursor, setCursor] = useState(-1);

  const onChangeCursorHandler = useCallback((e: React.MouseEvent<SVGSVGElement>, i: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCursor((prev) => prev === i ? -1 : i);
  }, []);

  const getOpacityWithCursor = useCallback((i: number) => {
    if (cursor === -1 || i === cursor) return 'opacity-100';
    else return 'opacity-40';
  }, [cursor]);

  useEffect(() => {
    if (!callback) return;
    switch (cursor) {
      case 0:
        callback('TOP');
        break;
      case 1:
        callback('JUG');
        break;
      case 2:
        callback('MID');
        break;
      case 3:
        callback('BOT');
        break;
      case 4:
        callback('SUP');
        break;
      default:
        callback('ALL');
    }
  }, [callback, cursor]);

  return (
    <section className={'flex gap-4'}>
      <TopIcon className={`${getOpacityWithCursor(0)} cursor-pointer`} onClick={(e) => onChangeCursorHandler(e, 0)} />
      <JugIcon className={`${getOpacityWithCursor(1)} cursor-pointer`} onClick={(e) => onChangeCursorHandler(e, 1)} />
      <MidIcon className={`${getOpacityWithCursor(2)} cursor-pointer`} onClick={(e) => onChangeCursorHandler(e, 2)} />
      <BotIcon className={`${getOpacityWithCursor(3)} cursor-pointer`} onClick={(e) => onChangeCursorHandler(e, 3)} />
      <SupIcon className={`${getOpacityWithCursor(4)} cursor-pointer`} onClick={(e) => onChangeCursorHandler(e, 4)} />
    </section>
  );
};

export default LaneNavigator;

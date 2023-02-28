import React, { useCallback } from 'react';
import { ReactComponent as Random } from '../../assets/random.svg';
import { ChampionType } from '../../type/type';

interface PortraitProps {
  champion: ChampionType;
  src?: string;
  callback?: (champion: ChampionType) => void;
}
const PickPortrait: React.FC<PortraitProps> = ({ src, champion, callback }) => {
  const onClickChampionCallback = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    callback && callback(champion);
  }, [callback, champion]);

  return (
    <div className={'flex flex-col w-[88px] h-[120px] items-center justify-between'} onClick={onClickChampionCallback}>
      <figure className={'border border-lolGreen relative bg-[#00070f] w-[88px] h-[88px]'}>
        {
          !Boolean(src) ?
            <Random className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} /> :
            <img src={src} alt={'portrait'} />
        }
      </figure>
      <figcaption className={'text-lolYellow'}>{champion.id}</figcaption>
    </div>
  )
}

export default PickPortrait;

import React, { useCallback } from 'react';
import { ReactComponent as Random } from '../../assets/random.svg';
import { ChampionType } from '@/type/type';

interface PortraitProps {
  champion: ChampionType;
  src?: string;
  callback?: (champion: ChampionType) => void;
  disabled?: boolean;
}

const PickPortrait: React.FC<PortraitProps> = ({ src, champion, callback, disabled }) => {
  const onClickChampionCallback = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    callback && !disabled && callback(champion);
  }, [callback, champion]);

  return (
    <div className={'flex flex-col w-[88px] h-[120px] items-center justify-between'} onClick={onClickChampionCallback}>
      <figure
        className={`relative border border-lolGreen relative bg-[#00070f] w-[88px] h-[88px] ${disabled ? 'opacity-30' : 'cursor-pointer'}`}>
        {
          !Boolean(src) ?
            <Random className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} /> :
            <>
              <img src={src} alt={'portrait'} />
              {/*{disabled && <span className={'absolute w-full h-full top-0 left-0 bg-red-500'} />}*/}
            </>

        }
      </figure>
      <figcaption className={'font-medium text-[14px] text-center text-lolYellow'}>{champion.name}</figcaption>
    </div>
  );
};

export default PickPortrait;

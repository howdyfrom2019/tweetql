import React, { useCallback } from 'react';
import { ReactComponent as Random } from '../../assets/random.svg';

interface PortraitProps {
  id?: number;
  src?: string;
  name: string;
  callback?: (id: string) => void;
}
const PickPortrait: React.FC<PortraitProps> = ({ id, src, name, callback }) => {

  const onClickChampionCallback = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    callback && callback(name);
  }, [callback, name]);

  return (
    <div className={'flex flex-col w-[88px] h-[120px] items-center justify-between'} onClick={onClickChampionCallback}>
      <figure className={'border border-lolGreen relative bg-[#00070f] w-[88px] h-[88px]'}>
        {
          !Boolean(src) ?
            <Random className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} /> :
            <img src={src} alt={'portrait'} />
        }
      </figure>
      <figcaption className={'text-lolYellow'}>{name}</figcaption>
    </div>
  )
}

export default PickPortrait;
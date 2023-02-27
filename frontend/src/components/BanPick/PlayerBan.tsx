import React  from 'react';

interface Props {
  src?: string;
  disabled: boolean;
}

const PlayerBan = ({ src, disabled }: Props) => {
  return (
    <figure className={`relative w-16 h-16`}>
      {src && src.length > 0 && <img src={src} alt={'banned_champion'} />}
      <span className={`absolute w-full h-full bg-200% z-10 top-0 left-0 ${disabled ? '' : 'bg-gradient-to-t from-banBlue animate-ban-select'}`} />
      <span className={'absolute top-3 left-3 left-0 blue-team-diagonal'} />
    </figure>
  );
};

export default PlayerBan;

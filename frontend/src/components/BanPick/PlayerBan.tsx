import React  from 'react';

interface Props {
  src?: string;
  disabled: boolean;
}

const PlayerBan = ({ src, disabled }: Props) => {
  return (
    <figure className={`w-16 h-16 bg-200% ${disabled ? '' : 'bg-gradient-to-t from-[#E1E3E0] animate-ban-select'}`}>
      {src && src.length > 0 && <img src={src} alt={'banned_champion'} />}
    </figure>
  );
};

export default PlayerBan;

import React, { useMemo } from 'react';

interface Props {
  patch: string;
  blueTeam: boolean;
  image?: string;
  disabled: boolean;
}

const PlayerBan = ({ patch, blueTeam, image, disabled }: Props) => {
  const src = useMemo(() => `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${image}`, [patch, image]);
  return (
    <figure className={`relative w-16 h-16`}>
      {image && image.length > 0 && <img src={src} alt={'banned_champion'} />}
      <span className={`absolute w-full h-full bg-200% z-10 top-0 left-0 ${disabled ? '' : 'bg-gradient-to-t animate-ban-select'} ${blueTeam ? 'from-banBlue' : 'from-banRed'}`} />
      <span className={`absolute top-3 left-3 left-0 ${blueTeam ? 'blue-team-diagonal' : 'red-team-diagonal'}`} />
    </figure>
  );
};

export default React.memo(PlayerBan);

import React, { useCallback, useMemo, useRef, useState } from 'react';

export interface PlayListProps {
  src: string;
  fileName: string;
}

interface Props {
  playlist: PlayListProps[];
  callback?: (id: number) => void;
}

type MusicHandlerType = 'NEXT' | 'PREV';
const BASIC_MUSIC_BAR_STYLE = 'h-px w-px scale-y-200 bg-lolYellow';

const MusicPlayer = ({ playlist, callback }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [cursor, setCursor] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const audioSource = useMemo(() => playlist.length === 0 ? '' : playlist[cursor].src,[playlist, cursor]);

  const changeMusic = useCallback((type: MusicHandlerType) => {
    switch(type) {
      case 'NEXT':
        setCursor((prev) => Math.min(playlist.length - 1, prev + 1));
        break;
      case 'PREV':
        setCursor((prev) => Math.max(0, prev - 1));
        break;
      default:
        throw new Error('unhandled MusicHandlerType');
    }
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [playlist]);

  const toggleMusic = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!audioRef.current) return;
    audioRef.current.muted = false;

    if (audioRef.current.paused) {
      audioRef.current.play().then((res) => {console.log(res)}).catch(e => {console.log(e)});
    } else {
      audioRef.current.pause();
    }
    setIsPlay((prev) => !prev);
  }, []);

  return (
    <>
      <figure className={'rounded-full border border-lolYellow w-36 px-4 py-2 flex justify-between items-center'}>
        <div className={'flex gap-1 h-full items-center cursor-pointer transition-opacity'} onClick={toggleMusic}>
          <span className={`${BASIC_MUSIC_BAR_STYLE} ${isPlay && 'animate-sound'} animation-delay-600`} />
          <span className={`${BASIC_MUSIC_BAR_STYLE} ${isPlay && 'animate-sound'} animation-delay-1100`} />
          <span className={`${BASIC_MUSIC_BAR_STYLE} ${isPlay && 'animate-sound'} animation-delay-2000`} />
          <span className={`${BASIC_MUSIC_BAR_STYLE} ${isPlay && 'animate-sound'} animation-delay-1000`} />
          <span className={`${BASIC_MUSIC_BAR_STYLE} ${isPlay && 'animate-sound'} animation-delay-1500`} />
          <span className={`${BASIC_MUSIC_BAR_STYLE} ${isPlay && 'animate-sound'} animation-delay-600`} />
        </div>
        <figcaption className={'text-lolYellow truncate whitespace-nowrap w-20'}>{playlist[cursor]?.fileName || '____'}</figcaption>
      </figure>
      <audio muted playsInline loop ref={audioRef}>
        <source src={audioSource} type={"audio/mp3"} />
      </audio>
    </>
  )
}

export default MusicPlayer;

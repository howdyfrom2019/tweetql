import React, { useCallback, useRef, useState } from 'react';

interface Props {
  playlist: string[];
  callback?: (id: number) => void;
}

type MusicHandlerType = 'NEXT' | 'PREV';
const MusicPlayer = ({ playlist, callback }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [cursor, setCursor] = useState(0);

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

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = false;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, []);

  return (
    <>
      <audio className={'hidden'} muted autoPlay playsInline loop ref={audioRef}>
        <source src={playlist[cursor]} type={"audio/mp3"} />
      </audio>
    </>
  )
}

export default MusicPlayer;

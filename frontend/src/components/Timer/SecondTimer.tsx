import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChampionsByTeam } from '@/type/type';
import { RootState } from '@/store/reducers/RootReducer';

const INIT_SECONDS = 60;

const SecondTimer = ({ callback }: { callback?: () => void; }) => {
  const banned = useSelector<RootState, ChampionsByTeam>((state) => state.banned);
  const picked = useSelector<RootState, ChampionsByTeam>((state) => state.picked);
  const [seconds, setSeconds] = useState(INIT_SECONDS);

  useEffect(() => {
    if (banned.blue.length + banned.red.length + picked.blue.length + picked.red.length === 20) {
      setSeconds(0);
    } else {
      setSeconds(INIT_SECONDS);
    }
  }, [banned, picked]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds === 0) {
        callback && callback();
        clearInterval(countdown);
      }
      else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <>
      {seconds > 0 && <span className={'font-medium-32 text-white'}>{seconds}</span>}
    </>
  )
}

export default SecondTimer;

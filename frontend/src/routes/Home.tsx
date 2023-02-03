import React, { useCallback, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Input from '../components/Input/Input';
import { useApolloClient } from '@apollo/client';
import { NavLink, useNavigate } from 'react-router-dom';
import { SUMMONERS } from '../type/api';

const Home = () => {
  const navigator = useNavigate();
  const [nickname, setNickname] = useState('');
  const client = useApolloClient();

  const onHandleSearchName = useCallback(async(e: React.MouseEvent<SVGSVGElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    const { data } = await client.query({
      query: SUMMONERS,
      variables: {
        name: nickname,
      }
    });
    navigator(`/user/${data.summoner.id}`);
  }, [nickname, client]);

  return (
    <div className={`flex flex-col gap-12 items-center`}>
      <div className={'flex gap-6 justify-center items-center mt-10'}>
        <NavLink to={'/'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>전적검색</NavLink>
        <NavLink to={'/champions'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>챔피언 정보</NavLink>
      </div>
      <Logo className={`mt-24`} />
      <Input
        showSearchIcon
        className={`w-content-desktop`}
        placeholder={'롤 닉네임을 입력해주세요.'}
        onChange={(e) => {
          e.preventDefault();
          setNickname(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onHandleSearchName(e);
          }
        }}
        searchIconClickFn={onHandleSearchName}
      />
      <div>hihi hello 안녕</div>
    </div>
  )
}

export default Home;
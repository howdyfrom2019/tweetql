import React, { useCallback, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Input from '../components/Input/Input';
import { gql, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const SUMMONERS = gql`
    query getSummonerInfo($name: String!){
        summoner(name: $name) {
            id
            name
            puuid
        }
    }
`;

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
      <Logo className={`mt-40`} />
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
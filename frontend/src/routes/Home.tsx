import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Input from '../components/Input/Input';
import { gql, useQuery } from '@apollo/client';

const SUMMONERS_FAKER = gql`
    {
        summoner(name: "hide on bush") {
            id
            name
            puuid
        }
    }
`;

const Home = () => {
  const { data, loading, error } = useQuery(SUMMONERS_FAKER);
  console.log(data, loading, error);

  return (
    <div className={`flex flex-col gap-12 items-center`}>
      <Logo className={`mt-40`} />
      <Input
        showSearchIcon
        className={`w-content-desktop`}
        placeholder={'롤 닉네임을 입력해주세요.'}
      />
      <div>hihi hello 안녕</div>
    </div>
  )
}

export default Home;
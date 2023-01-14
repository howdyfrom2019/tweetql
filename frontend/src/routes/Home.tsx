import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Input from '../components/Input/Input';
import { gql, useApolloClient } from '@apollo/client';

const Home = () => {
  const client = useApolloClient();

  useEffect(() => {
    client.query({
      query: gql`
          {
              summoner(name: "hide on bush") {
                  id
                  name
                  puuid
              }
          }
      `
    }).then((res) => console.log(res));
  }, [client]);

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
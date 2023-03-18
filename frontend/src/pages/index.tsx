import React, { useCallback, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Input from '@/components/Input/Input';
import Link from 'next/link';
import { SUMMONERS } from '@/type/api';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';

const Index = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const client = useApolloClient();

  const onHandleSearchName = useCallback(async (e: React.MouseEvent<SVGSVGElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    const { data } = await client.query({
      query: SUMMONERS,
      variables: {
        name: nickname,
      },
    });
    await router.push({
      pathname: '/user/[id]',
      query: {
        id: data.summoner.id,
      },
    });
  }, [nickname, client]);

  return (
    <div className={`flex flex-col gap-12 items-center`}>
      <div className={'flex gap-6 justify-center items-center mt-10'}>
        <Link href={'/'} className={`font-regular-18`}>전적검색</Link>
        <Link href={'/champions'} className={`font-regular-18`}>챔피언 정보</Link>
        {/*<NavLink to={'/'}*/}
        {/*         className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>전적검색</NavLink>*/}
        {/*<NavLink to={'/champions'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>챔피언*/}
        {/*  정보</NavLink>*/}
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
  );
};

export default Index;

// export const getServerSideProps: GetServerSideProps<{}, {}> = async (ctx) => {
//   const apolloClient = initializeApolloClient(null);
//
//   await apolloClient.query({
//     query: SUMMONERS
//   });
//
//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   }
// }

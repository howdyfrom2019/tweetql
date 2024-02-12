import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import ChampionSideBar from '@/components/SideBar/ChampionSideBar';
import { ChampionType } from '@/type/type';
import Button from '@/components/Button/Button';
import ChampionPicks from '@/components/BanPick/ChampionPicks';
import ChampionHandler from '@/components/BanPick/ChampionHandler';
import { useRouter } from 'next/router';
import { LocalStorage } from '@/utils/utils';

const Champions = () => {
  const [selectedVersion, setSelectedVersion] = useState('13.1.1');
  const router = useRouter();

  const navigateToDraft = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await router.push({
      pathname: '/draft',
    });
  }, []);

  const moveToDetailChampionPage = useCallback(async (champion: ChampionType) => {
    const { id } = champion;
    await router.push({
      pathname: '/champion/[id]/version/[version]',
      query: {
        id: id,
        version: selectedVersion,
      },
    });
  }, []);

  return (
    <div className={`flex`}>
      <ChampionSideBar selectedVersionCallback={(version) => {
        setSelectedVersion(version);
      }} />
      <article className={'flex flex-col gap-8 mt-10 w-full'}>
        <header className={'flex justify-center gap-6'}>
          <Link href={'/'} className={`font-regular-18`}>전적검색</Link>
          <Link href={'/champion'} className={`font-regular-18`}>챔피언 정보</Link>
        </header>
        <main className={'flex flex-col gap-6 items-center'}>
          <ChampionHandler />
          <ChampionPicks portraitHandler={moveToDetailChampionPage} />
          <Button onClick={navigateToDraft}>Draft 모드</Button>
        </main>
      </article>
    </div>
  );
};

export default Champions;

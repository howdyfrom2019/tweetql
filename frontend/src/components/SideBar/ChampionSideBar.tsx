import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useQuery } from '@apollo/client';
import { LOL_PATCH_VERSIONS } from '../../type/api';
import { LtsVersionType } from '../../type/type';
import { ReactComponent as Poro} from '../../assets/poro_404.svg';

interface ChampionSideBarType {
  selectedVersionCallback?: (version: string) => void;
}

const ChampionSideBar: React.FC<ChampionSideBarType> = ({ selectedVersionCallback }) => {
  const { data, error, loading } = useQuery<LtsVersionType>(LOL_PATCH_VERSIONS);
  const latestPatches = useMemo(() => (data && data.latestVersion) ? data.latestVersion.slice(0, 5) : [], [data]);
  const [selectedVersion, setSelectedVersion] = useState(0);

  const onChangeSelectedVersion = useCallback((e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    e.preventDefault();
    setSelectedVersion(index);
  }, []);

  useEffect(() => {
    selectedVersionCallback && selectedVersionCallback(latestPatches[selectedVersion]);
  }, [selectedVersion, selectedVersionCallback]);

  return (
    <aside className={`sticky top-0 left-0 w-72 h-screen flex flex-col justify-around items-center shadow-section bg-section z-30`}>
      <Logo className={'scale-[67%] my-6'} />
      <article className={'flex flex-col flex-1'}>
        <section className={'flex flex-col items-center flex-1'}>
          <span className={'font-regular-18 tracking-label uppercase text-label'}>Recently Searched</span>
          <div className={'flex flex-col items-center h-full justify-around'}>
            <Poro />
            <span className={'text-sm tracking-tight text-whiteAlpha'}>최근에 찾아본 챔피언이 없습니다.</span>
          </div>
        </section>
        <section className={'flex flex-col items-center flex-1 gap-6'}>
          <span className={'font-regular-18 tracking-label uppercase text-label'}>Patch Version</span>
          <div className={'flex flex-col items-center h-full justify-around'}>
            {latestPatches.map((patch, i) => (
              <span
                className={`font-medium-24 tracking-wide cursor-pointer ${(selectedVersion === i) ? 'text-white' : 'text-whiteAlpha'}`} key={`patch_${i}`}
                onClick={(e) => onChangeSelectedVersion(e, i)}
              >
                {patch}
              </span>
            ))}
          </div>
        </section>
      </article>
    </aside>
  )
}

export default ChampionSideBar;
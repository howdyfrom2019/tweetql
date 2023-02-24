import React, { useEffect, useState } from 'react';
import { DataState, LtsVersionType } from '../type/type';
import { useQuery } from '@apollo/client';
import { LOL_PATCH_VERSIONS } from '../type/api';

export interface WithSelectedVersionProps {
  result: DataState<string> | null;
}

const withLatestVersion = <P extends WithSelectedVersionProps>(Component: React.ComponentType<P>) => {

  return function ComponentWithVersion(props : Omit<P, keyof WithSelectedVersionProps>) {
    const { data, error, loading } = useQuery<LtsVersionType>(LOL_PATCH_VERSIONS);
    const [result, setResult] = useState<DataState<string> | null>(null);
    console.debug(data, error, loading);

    useEffect(() => {
      setResult({ data: (data && data.latestVersion) ? data.latestVersion[0] : '', error, loading });
    }, [data, error, loading]);

    return <Component {...result} {...props as P} />;
  }
}

export default withLatestVersion;

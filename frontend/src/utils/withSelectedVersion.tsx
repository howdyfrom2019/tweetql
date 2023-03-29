import React, { useEffect, useState } from 'react';
import { DataState, LtsVersionType } from '@/type/type';
import { useQuery } from '@apollo/client';
import { LOL_PATCH_VERSIONS } from '@/type/api';
import { GetStaticProps } from 'next';
import { initializeApolloClient } from '@/client';

export interface WithSelectedVersionProps {
  result: DataState<string> | null;
}

const withLatestVersion = <P extends WithSelectedVersionProps>(Component: React.ComponentType<P>) => {

  return function ComponentWithVersion(props: Omit<P, keyof WithSelectedVersionProps>) {
    const { data, error, loading } = useQuery<LtsVersionType>(LOL_PATCH_VERSIONS, { ssr: true });
    const [result, setResult] = useState<DataState<string> | null>(null);

    useEffect(() => {
      setResult({ data: (data && data.latestVersion) ? data.latestVersion[0] : '', error, loading });
    }, [data, error, loading]);

    return <Component {...result} {...props as P} />;
  };
};

export const getStaticProps: GetStaticProps<{}, {}> = async(ctx) => {
  const client = initializeApolloClient(ctx);
  await client.query({
    query: LOL_PATCH_VERSIONS
  })

  return {
    props: {
      initialApolloState: client.cache.extract(),
    }
  }
}

export default withLatestVersion;

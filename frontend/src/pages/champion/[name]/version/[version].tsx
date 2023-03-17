import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChampionSpecificType } from '../../../../type/type';
import { ONE_CHAMPION } from '../../../../type/api';

const Version = () => {
  const router = useRouter();
  const { name, version } = router.query;
  const { data, error, loading } = useQuery<ChampionSpecificType>(ONE_CHAMPION, {
    variables: { version, name },
  });

  return (
    <div>{name}</div>
  );
};

export default Version;

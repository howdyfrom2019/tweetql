import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ChampionSpecificType } from '../type/type';
import { ONE_CHAMPION } from '../type/api';

const ChampionDetail = () => {
  const { name } = useParams();
  const { data, error, loading } = useQuery<ChampionSpecificType>(ONE_CHAMPION, {
    variables: {
      version: '13.1.1',
      name
    }
  });
  console.log(data, error, loading)
  return (
    <div>{name}</div>
  )
}

export default ChampionDetail;
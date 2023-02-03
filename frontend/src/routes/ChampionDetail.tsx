import React from 'react';
import { useParams } from 'react-router-dom';

const ChampionDetail = () => {
  const { name } = useParams();
  return (
    <div>{name}</div>
  )
}

export default ChampionDetail;
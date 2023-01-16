import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LOL_PATCH_VERSIONS } from '../type/api';

const Champion = () => {
  const { data, error, loading } = useQuery(LOL_PATCH_VERSIONS);
  return (
    <div className={`flex flex-col gap-12 items-center`}>
      <div className={'flex gap-6 justify-center items-center mt-10'}>
        <NavLink to={'/'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>전적검색</NavLink>
        <NavLink to={'/champion'} className={({ isActive }) => `font-regular-18 ${!isActive && 'text-whiteAlpha'}`}>챔피언 정보</NavLink>
      </div>
    </div>
  )
}

export default Champion;
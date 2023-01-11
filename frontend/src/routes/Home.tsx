import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Home = () => {
  return (
    <div className={`mt-40 flex flex-col gap-12`}>
      <Logo />
    </div>
  )
}

export default Home;
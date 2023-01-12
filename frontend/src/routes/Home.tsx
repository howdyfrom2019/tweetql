import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Input from '../components/Input/Input';

const Home = () => {
  return (
    <div className={`flex flex-col gap-12 items-center`}>
      <Logo className={`mt-40`} />
      <Input
        showSearchIcon
        className={`w-content-desktop`}
        placeholder={'롤 닉네임을 입력해주세요.'}
      />
      <div>hihi hello 안녕</div>
    </div>
  )
}

export default Home;
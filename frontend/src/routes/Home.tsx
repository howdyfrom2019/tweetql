import React, { useEffect } from 'react';

const Home = () => {
  const getPlayList = async () => {
    const ytMusic = (await fetch("hi", {
      method: "GET",
    })).json();
    console.log(ytMusic);
  }
  return (
    <div onClick={(e) => {
      e.preventDefault();
      getPlayList();
    }}>안녕 홈이야!</div>
  )
}

export default Home;
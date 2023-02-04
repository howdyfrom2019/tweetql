import React from 'react';

const Draft = () => {
  return (
    <div className={'flex flex-col relative'}>
      <main className={'flex h-[1000px]'}>hi</main>
      <article className={'flex flex-col sticky left-0 bottom-0 w-screen min-w-[1200px]'}>
        <div className={'w-[300px] h-[64px] bg-blue-600'} />
        <div className={'flex w-full bg-black border-t-2 border-lolYellow h-[180px]'} />
      </article>
    </div>
  )
}

export default Draft;
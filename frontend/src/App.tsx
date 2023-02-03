import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import User from './routes/User';
import Champion from './routes/Champion';
import ChampionDetail from './routes/ChampionDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/champions"} element={<Champion />} />
        <Route path={"/champion/:name/version/:version"} element={<ChampionDetail />} />
        <Route path={"/user"} element={<User />}>
          <Route path={"/user/:id"} element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
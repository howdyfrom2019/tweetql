import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import User from './routes/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user"} element={<User />}>
          <Route path={"/user/:id"} element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
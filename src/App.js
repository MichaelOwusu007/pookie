

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleDog from "./pages/SingleDog"
import Catpage from './pages/Catpage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
           <Route path="Catpage" element={<Catpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
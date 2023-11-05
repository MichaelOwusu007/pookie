

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleDog from "./pages/SingleDog"
import Catpage from './pages/Catpage';
import SingleCat from './pages/SingleCat';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
           <Route path="Catpage" element={<Catpage />}></Route>
          <Route path="/:name" element={<SingleCat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
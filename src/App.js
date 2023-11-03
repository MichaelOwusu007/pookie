

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleDog from "./pages/SingleDog"
import PersonalityMatcher from './pages/PersonalityMatcher';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
          <Route path="personality" element={<PersonalityMatcher />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
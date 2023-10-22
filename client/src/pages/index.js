import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import SpaceCats from './space-cats';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
        <Route element={<SpaceCats />} path="/cats" />
      </Routes>
    </BrowserRouter>
  );
}

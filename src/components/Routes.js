import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NFTPage from './pages/NFTPage';
import ChartPage from './pages/ChartPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nfts" element={<NFTPage />} />
      <Route path="/chart" element={<ChartPage />} />
    </Routes>
  );
}

export default AppRoutes;

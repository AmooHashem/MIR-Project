import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ElasticSearch from '../pages/ElasticSearch';
import Iman from '../pages/Iman';

const Root = () => {
  return (
    <Routes>
      <Route path="/elastic-search" element={<ElasticSearch />} />
      <Route path="/" element={<Iman />} />
    </Routes>
  );
};
export default Root;

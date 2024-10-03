import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from "../Layout/Layout"
import Template from '../Pages/Template';
import CreateResume from '../Pages/CreateResume';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create-resume' element={<CreateResume />} />
          <Route path='templates' element={<Template />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

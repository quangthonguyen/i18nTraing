import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

const languages = ['vi','en'] // dataDummy


const App = () => (
  <Routes>
    <Route element={<Layout />} >
      {languages.map((v) => (
        <Route path={`/${v}`} element={<Home />} key={v}/>
      ))}
    </Route>
  </Routes>
)

export default App;

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../utils/ROUTES';
import Area from '../Area/Area';
import Header from '../Header/Header';
import Line from '../Line/Line';
import PageWrap from '../../HOC/PageWrap/PageWrap';


const App: React.FC = () => {
  return (
    <div className='App p-4'>
      <Header/>
      <Routes>
        <Route path={ROUTES.root} element={<PageWrap component={Area}/>}/>
        <Route path={ROUTES.line} element={<PageWrap component={Line}/>}/>
        <Route path={ROUTES.anonymous} element={<>404 Not Found</>}/>
      </Routes>
    </div>
  )
}

export default App


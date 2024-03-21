import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../utils/ROUTES';
import Area from '../Area/Area';
import Header from '../Header/Header';


const App: React.FC = () => {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path={ROUTES.root} element={<Area/>}/>
        <Route path={ROUTES.anonymous} element={<>404 Not Found</>}/>

      </Routes>
    </div>
  )
}

export default App


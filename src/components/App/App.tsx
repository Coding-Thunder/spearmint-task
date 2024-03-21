import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../utils/ROUTES';
import Home from '../Home/Home';
import Area from '../Area/Area';


const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.root} element={<Home/>}/>
        <Route path={ROUTES.area} element={<Area/>}/>
        <Route path={ROUTES.anonymous} element={<>404 Not Found</>}/>

      </Routes>
    </div>
  )
}

export default App


import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../utils/ROUTES';
import AreaChartComponent from '../AreaChartComponent/AreaChartComponent';
import Header from '../Header/Header';
import LineChartComponent from '../LineChartComponent/LineChartComponent';
import PageWrap from '../../HOC/PageWrap/PageWrap';
import BarChartComponent from '../BarChartComponent/BarChartComponent';
import ScatterChartComponent from '../ScatterChartComponent/ScatterChartComponent';


const App: React.FC = () => {
  return (
    <div className='App p-4'>
      <Header/>
      <Routes>
        <Route path={ROUTES.root} element={<PageWrap component={AreaChartComponent}/>}/>
        <Route path={ROUTES.line} element={<PageWrap component={LineChartComponent}/>}/>
        <Route path={ROUTES.bar} element={<PageWrap component={BarChartComponent}/>}/>
        <Route path={ROUTES.scatter} element={<PageWrap component={ScatterChartComponent}/>}/>
        <Route path={ROUTES.anonymous} element={<>404 Not Found</>}/>
      </Routes>
    </div>
  )
}

export default App


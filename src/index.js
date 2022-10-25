import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import FalconHeavy from './components/falconheavy';
import Falcon1 from './components/falcon1';
import Falcon9 from './components/falcon9';
import Starship from './components/starship';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>} />
      <Route path='starship' element={<Starship/>} />
      <Route path='falcon1' element={<Falcon1/>} />
      <Route path='falcon9' element={<Falcon9/>} />
      <Route path='falconheavy' element={<FalconHeavy/>} />
      
    </Routes>
  </BrowserRouter>
);



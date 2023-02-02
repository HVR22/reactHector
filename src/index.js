import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Platos from "./Platos"
import Pedido from './Pedido';
import Realizado from './Realizado';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/platos' element={<Platos/>}/>
        <Route path='/pedido' element={<Pedido/>}/>
        <Route path='/realizado' element={<Realizado/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



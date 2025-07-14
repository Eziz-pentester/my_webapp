import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram'; 
import { Button } from './components/Button/Button';  
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/form';

function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

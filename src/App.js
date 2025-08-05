import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram'; 
import  Button  from './components/Button/Button';  
import  Header  from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import  ProductList  from './components/ProductList/ProductList';
import  Form  from './components/form/Form';
import './components/Header/Header.css' 
import ProductItem from './ProductItem/ProductItem';
function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header/>
       <Button onClick={onToggleButton}>закрыть</Button>
       <Routes>
        <Route index element={<ProductList />} />
        <Route path={'product/:id'} element={<ProductItem />} />
        <Route path={'form'} element={<Form />} />
        </Routes>
    </div>
  );
}

export default App;

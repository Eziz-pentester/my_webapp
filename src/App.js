import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram'; 
const tg = window.Telegram?.WebApp || {
  ready: () => console.log("tg.ready() mocked"),
  close: () => console.log("tg.close() mocked"),
};

function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  

  return (
    <div className="App">
      
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';

const tg = window.Telegram?.WebApp || {
  ready: () => console.log("tg.ready() mocked"),
  close: () => console.log("tg.close() mocked"),
};

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      Welcome to the Web App!
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;

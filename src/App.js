import React, { useState, useEffect } from 'react';
import logo from './logoDivya.png';
import './App.css';
import Preloader from './components/preloader/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    return !sessionStorage.getItem('divya_preloader_shown');
  });

  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPreloader]);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
  };

  return (
    <div className="App">
      {showPreloader && <Preloader onFinish={handlePreloaderFinish} />}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

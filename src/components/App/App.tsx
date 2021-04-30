import React, { useState } from 'react';
import './App.css';
import { FullpackModalProvider } from '../../libs/react-fullpack-modal'
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

function App() {

  const [random, setRandom] = useState(0)

  const randomize = () => {
    setRandom(Math.random())
  }

  return (
    <FullpackModalProvider>
      <button onClick={randomize}>Randomize</button>
      <Header
        random={random}
      />
      <Main/>
      <Footer/>
    </FullpackModalProvider>
  );
}

export default App;

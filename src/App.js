import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nft from './components/Nft';
import Earn from './components/Earn';
import Game from './components/Game';
import Token from './components/Token';
import Roadmap from './components/Roadmap';
import Uniswap from './components/Uniswap';
import Powered from './components/Powered';
import Questions from './components/Questions';

function App() {
  useEffect(() => {
    AOS.init({once:true});
  }, []);

  return (
    <main className='overflow-hidden max-w-[1920px] mx-auto'>
      <Navbar />
      <Hero />
      <Nft />
      <Earn />
      <Game />
      <Token />
      <Roadmap />
      <Uniswap />
      <Powered />
      <Questions />
    </main>
  );
}

export default App;

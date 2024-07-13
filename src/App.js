import Earn from './components/Earn';
import Game from './components/Game';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Nft from './components/Nft';
import Token from './components/Token';
import './App.css';
import Roadmap from './components/Roadmap';
import Uniswap from './components/Uniswap';

function App() {
  return (
    <main className=' overflow-hidden max-w-[1920px] mx-auto'>
      <Navbar />
      <Hero />
      <Nft />
      <Earn />
      <Game />
      <Token />
      <Roadmap />
      <Uniswap />
    </main>
  );
}

export default App;

import './App.css';
import Earn from './components/Earn';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Nft from './components/Nft';

function App() {
  return (
    <main className=' overflow-hidden'>
      <Navbar />
      <Hero />
      <Nft />
      <Earn />
    </main>
  );
}

export default App;

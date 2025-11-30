import Hero from './components/Hero';
import About from './components/About';
import Divisions from './components/Divisions';
import Vision from './components/Vision';
import Advisory from './components/Advisory';
import Infrastructure from './components/Infrastructure';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Divisions />
      <Vision />
      <Advisory />
      <Infrastructure />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Quotes from './components/Quotes';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Tag from './components/Tag';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  AOS.init({ offset: 100, duration: 1000, once: true });

  return (
    <>
      <Globals />
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <Hero />
      <main>
        <Features />
        <Quotes />
        <Cta />
      </main>
      <Footer />
      <Tag />
    </>
  );
};

export default App;

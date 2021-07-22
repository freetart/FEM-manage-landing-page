import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Quotes from './components/Quotes';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Quotes />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default App;

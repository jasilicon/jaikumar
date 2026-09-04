import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

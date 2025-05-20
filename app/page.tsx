import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import ParallaxBand from '../components/ui/ParallaxBand';
import Banner3D from '../components/three/Banner3D';
import Footer from '../components/ui/Footer';
import '../styles/globals.css';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Banner3D />
      <ParallaxBand image="/bands/coding.jpg" />
      <About />
      <ParallaxBand image="/bands/keyboard.jpg" flip />
      <Experience />
      <ParallaxBand image="/bands/city.jpg" />
      <Projects />
      <ParallaxBand image="/bands/hallway.jpg" flip />
      <Contact />
      <Footer />
    </main>
  );
}

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import ParallaxBand from '../components/ui/ParallaxBand';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ParallaxBand image="/bands/code-dark.jpg" />
      <About />
      <ParallaxBand image="/bands/keyboard.jpg" flip />
      <Experience />
      <ParallaxBand image="/bands/city.jpg" />
      <Projects />
      <ParallaxBand image="/bands/gradient.jpg" flip />
      <Contact />
    </main>
  );
}
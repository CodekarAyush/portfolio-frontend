import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollTop from './components/layout/ScrollTop';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import ResumeSection from './components/sections/ResumeSection';
import Contact from './components/sections/Contact';
import { useTheme } from './hooks/useTheme';

// three.js is heavy — load the background after the main UI is interactive.
const ThreeBackground = lazy(() => import('./components/ui/ThreeBackground'));

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Suspense fallback={null}>
        <ThreeBackground theme={theme} />
      </Suspense>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

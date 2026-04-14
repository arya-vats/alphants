import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Who from './sections/Who';
import Band from './sections/Band';
import What from './sections/What';
import How from './sections/How';
import Founder from './sections/Founder';
import Build from './sections/Build';
import Footer from './sections/Footer';

export default function App() {
  const [navTheme, setNavTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const darkSectionIds = ['founder'];

    function update() {
      const y = window.scrollY + 90;

      // Check if cursor/nav is over a dark section or footer
      let isDark = false;
      darkSectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bot = top + el.offsetHeight;
          if (y >= top && y < bot) isDark = true;
        }
      });
      const ft = document.querySelector('footer');
      if (ft && y >= ft.offsetTop) isDark = true;

      setNavTheme(isDark ? 'dark' : 'light');
      setOnDark(isDark);

      // Active section
      let current = 'home';
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveSection(current);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <Cursor onDark={onDark} />
      <Nav theme={navTheme} activeSection={activeSection} />
      <Hero />
      <Who />
      <Band />
      <What />
      <How />
      <Founder />
      <Build />
      <Footer />
    </>
  );
}

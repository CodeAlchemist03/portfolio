import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import Writing from '@/components/Writing';
import Research from '@/components/Research';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Stack />
        <Writing />
        <Research />
        <About />
      </main>
      <Contact />
    </>
  );
}

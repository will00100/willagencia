
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-brand-graphite antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <TargetAudience />
        <About />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

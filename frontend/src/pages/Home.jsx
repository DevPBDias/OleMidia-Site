import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import BackHeaderBtn from '../components/BackHeaderBtn';

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <BackHeaderBtn />
      <Footer />
    </div>
  );
}

export default Home;

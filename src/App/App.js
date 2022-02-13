import React from 'react';
import Header from './Header';
import Utility from './Utility/Utility';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer/Footer';
import Academics from './Academics';
import './App.css';



function App() {
  return (
    <main>
      <Header />
      <About />
      <Academics />
      <Portfolio />
      <Utility />
      <Footer />
    </main>
  );
}

export default App;

import React from 'react';
import './App.css';
import Footer from './components/atoms/Footer/Footer';
import Header from './components/atoms/Header/Header';
import Navigation from './Navigation';


const App = () => {
  return (
    <>
      <div id="app">
        <Header />
        <Navigation />
      </div>
      <Footer />
    </>
  );
}

export default App;

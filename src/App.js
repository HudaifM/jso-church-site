// App.jsx
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import './App.css' // Importing the CSS file for styling;
import History from './components/History';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <History/>
      <Footer/>
    
    </>
  );
}

export default App;

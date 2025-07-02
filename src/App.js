// App.jsx
// import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import './App.css' // Importing the CSS file for styling;
import History from './pages/History';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <History/>
      <History/>
      <Footer/>
    
    </>
  );
}

export default App;

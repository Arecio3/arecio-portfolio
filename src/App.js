import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import NavMenu from './components/navMenu/NavMenu';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
      <Home />
      <About />
      <Services />
      <Portfolio />
      </div>
    </Router>
  );
}

export default App;

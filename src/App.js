import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import NavMenu from './components/navMenu/NavMenu';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from './pages/testimonials/Testimonials';
import Contact from "./pages/contact/Contact";
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="/testimonials">
          <Testimonials/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

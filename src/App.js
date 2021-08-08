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
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const lightTheme = {
    body: "#eff0f4",
    fontColor: "#fff",
  };
  const darkTheme = {
    body: "#000000",
    fontColor: "#fff",
  };

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Router className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} setActive={setActive} theme={theme} setTheme={setTheme}/>

      <Switch>
        <Route exact path="/">
          <Home theme={theme} setTheme={setTheme}/>
        </Route>
        <Route  path="/about">
          <About theme={theme} setTheme={setTheme}/>
        </Route>
        <Route path="/services">
          <Services theme={theme} setTheme={setTheme}/>
        </Route>
        <Route path="/portfolio">
          <Portfolio theme={theme} setTheme={setTheme}/>
        </Route>
        <Route path="/testimonials">
          <Testimonials/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>

    </Router>
    </ThemeProvider>
  );
}

export default App;

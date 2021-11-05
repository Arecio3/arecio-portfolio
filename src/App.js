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
import Footer from './components/footer/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");


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
       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} setActive={setActive} theme={theme} setTheme={setTheme}/>
          <Home theme={theme} setTheme={setTheme}/>
          <About theme={theme} setTheme={setTheme}/>
          <Services theme={theme} setTheme={setTheme}/>
          <Portfolio theme={theme} setTheme={setTheme}/>
          <Testimonials theme={theme} setTheme={setTheme}/>
          <Contact theme={theme} setTheme={setTheme}/>
          <Footer theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;

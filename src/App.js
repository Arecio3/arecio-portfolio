import './App.css';
import Header from './components/header/Header';
import NavMenu from './components/navMenu/NavMenu';
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  );
}

export default App;

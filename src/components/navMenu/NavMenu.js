import "./navmenu.css"
import { useState } from "react";

function NavMenu({ menuOpen, setMenuOpen }) {

    
    return (
        <nav className={"nav-menu "+ (!menuOpen && "Close")}>
            <div onClick={(e) => setMenuOpen(false)} className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
            <div className="nav-menu-inner">
                <ul>
                    <li onClick={() => setMenuOpen(false)}><a href="/" className="inner-shadow active">Home</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href="#about" className="outer-shadow hover-in-shadow">About</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href="#services" className="outer-shadow hover-in-shadow">Services</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href="#portfolio" className="outer-shadow hover-in-shadow">Portfolio</a></li>
                    <li><a href="/" className="outer-shadow hover-in-shadow">Testimonials</a></li>
                    <li><a href="/" className="outer-shadow hover-in-shadow">Contact</a></li>
                </ul>
            </div>
            {/* Copyright */}
            <p className="copyright-text">&copy; 2021 Arecio Canton</p>
        </nav>
    )
}

export default NavMenu

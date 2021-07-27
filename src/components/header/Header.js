import './header.css';
import { useState } from "react";
import NavMenu from "../navMenu/NavMenu";

function Header({ menuOpen, setMenuOpen }) {

    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="logoContainer">
                        <a className="logo" href="/">A</a>
                    </div>
                    <div className={"burgerBtn outer-shadow hover-in-shadow " + (menuOpen && "Open")} onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

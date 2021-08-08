import "./navmenu.css"
import { Link } from "react-router-dom";

function NavMenu({ menuOpen, setMenuOpen, theme, setTheme }) {

    
    return (
        <div>
            {menuOpen ? <nav className={theme === "dark" ? "nav-menu active" : "nav-menu "}>
            <div onClick={(e) => setMenuOpen(false)} className={theme === "dark" ?  "close-nav-menu outer-shadow-dm hover-in-shadow-dm" : "close-nav-menu outer-shadow hover-in-shadow"}>&times;</div>
            <div className={"nav-menu-inner"}>
                <ul>
                   <Link to='/'><li onClick={() => setMenuOpen(false)} className={theme === "dark" ? "outer-shadow-dm hover-in-shadow-dm active" : "inner-shadow active"}>Home</li></Link>
                   <Link to='/about'><li onClick={() => setMenuOpen(false)} className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>About</li></Link>
                   <Link to='/services'><li onClick={() => setMenuOpen(false)}className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Services</li></Link>
                   <Link to='/portfolio'><li onClick={() => setMenuOpen(false)}className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Portfolio</li></Link>
                    <Link to='/testimonials'><li onClick={() => setMenuOpen(false)}className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Testimonials</li></Link>
                   <Link to='/contact'><li  onClick={() => setMenuOpen(false)} className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Contact</li></Link>
                </ul>
            </div>
            {/* Copyright */}
            <p className="copyright-text">&copy; 2021 Arecio Canton</p>
        </nav> : ""}
        </div>
    )
}

export default NavMenu

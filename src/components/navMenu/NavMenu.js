import "./navmenu.css"
import { Link } from "react-router-dom";

function NavMenu({ menuOpen, setMenuOpen }) {

    
    return (
        <nav className={"nav-menu "+ (!menuOpen && "Close")}>
            <div onClick={(e) => setMenuOpen(false)} className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
            <div className="nav-menu-inner">
                <ul>
                   <Link to='/'><li onClick={() => setMenuOpen(false)} className="inner-shadow active">Home</li></Link>
                   <Link to='/about'><li onClick={() => setMenuOpen(false)} className="outer-shadow hover-in-shadow">About</li></Link>
                   <Link to='/services'><li onClick={() => setMenuOpen(false)}className="outer-shadow hover-in-shadow">Services</li></Link>
                   <Link to='/portfolio'><li onClick={() => setMenuOpen(false)}className="outer-shadow hover-in-shadow">Portfolio</li></Link>
                    <Link to='/testimonials'><li onClick={() => setMenuOpen(false)}className="outer-shadow hover-in-shadow">Testimonials</li></Link>
                    <li className="outer-shadow hover-in-shadow">Contact</li>
                </ul>
            </div>
            {/* Copyright */}
            <p className="copyright-text">&copy; 2021 Arecio Canton</p>
        </nav>
    )
}

export default NavMenu

import "./navmenu.css"

function NavMenu({ menuOpen, setMenuOpen, theme, setTheme }) {

    
    return (
        <div className={menuOpen ? "open" : "close"}>
            {menuOpen ? <nav className={theme === "dark" ? "nav-menu active" : "nav-menu "}>
            <div onClick={(e) => setMenuOpen(false)} className={theme === "dark" ?  "close-nav-menu outer-shadow-dm hover-in-shadow-dm" : "close-nav-menu outer-shadow hover-in-shadow"}>&times;</div>
            <div className="nav-menu-inner">
                <ul>
                   <a href="#home"><li onClick={() => setMenuOpen(false)} className={theme === "dark" ? "outer-shadow-dm hover-in-shadow-dm active" : "inner-shadow active"}>Home</li></a>
                   <a href="#about"><li onClick={() => setMenuOpen(false)} className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>About</li></a>
                   <a href="#services"><li onClick={() => setMenuOpen(false)}className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Services</li></a>
                   <a href="#portfolio"><li onClick={() => setMenuOpen(false)}className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Portfolio</li></a>
                   <a href="#testimonials"><li onClick={() => setMenuOpen(false)}className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Testimonials</li></a>
                   <a href="#contact"><li  onClick={() => setMenuOpen(false)} className={theme === "dark" ? "inner-shadow-dm active" : "outer-shadow hover-in-shadow active"}>Contact</li></a>
                </ul>
            </div>
            {/* Copyright */}
            <p className="copyright-text">&copy; 2021 Arecio Canton</p>
        </nav> : ""}
        </div>
    )
}

export default NavMenu

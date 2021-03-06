import './header.css';
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

function Header({ menuOpen, setMenuOpen, theme, setTheme }) {
    
    function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const icon = theme === "light" ? <HiMoon className="moon" size={39} /> : <CgSun className="sun" size={39} color="#c4a35a" background_color="transparent"/>;

    return (
        <header className={ theme === "dark" ?  "header" : "header active"}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="logoContainer">
                       <a href="#home"><span className="logo">A</span>
                    </a>
                    </div>
                    <div className="toggleTheme">
                        <button className={theme === "dark" ? "toggleTheme outer-shadow-dm hover-in-shadow-dm active" : "toggleTheme outer-shadow hover-in-shadow"} onClick={changeTheme}>{icon}</button>
                    </div>
                    <div className={theme === "dark" ? "burgerBtn outer-shadow-dm hover-in-shadow-dm active" : "burgerBtn outer-shadow hover-in-shadow" + (menuOpen && "Open")} onClick={() => setMenuOpen(true)}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

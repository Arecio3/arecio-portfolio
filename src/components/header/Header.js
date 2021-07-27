import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="logoContainer">
                        <a className="logo" href="/">A</a>
                    </div>
                    <div className="burgerBtn outer-shadow hover-in-shadow">
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

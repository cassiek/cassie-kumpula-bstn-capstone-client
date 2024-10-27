import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav__logo"><h1>StockPilot</h1></NavLink>
                <ul>
                    <li><NavLink to="/warehouses" className="nav__link">Warehouses</NavLink></li>
                    <li><NavLink to="/products" className="nav__link">Products</NavLink></li>
                    <li><NavLink to="/inventory" className="nav__link">Inventory</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
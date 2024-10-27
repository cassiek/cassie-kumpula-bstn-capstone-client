import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav__logo-link"><h1 className="nav__logo">StockPilot</h1></NavLink>
                <ul className="nav__list">
                    <li className="nav__list-item"><NavLink to="/warehouses" className="nav__link">Warehouses</NavLink></li>
                    <li className="nav__list-item"><NavLink to="/products" className="nav__link">Products</NavLink></li>
                    <li className="nav__list-item"><NavLink to="/inventory" className="nav__link">Inventory</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
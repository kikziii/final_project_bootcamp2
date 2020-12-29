import { NavLink } from 'react-router-dom';
import logo from './assets/images/logo.jpg';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block">{/* hidden spacer to center brand on mobile */}</span>
        <NavLink className="navbar-brand logo" to="/" font-size={40}>
          <img
            src={logo}
            width={40}
            height={40}
            className="d-inline-block align-center"
            alt="Bird logo"
            loading="lazy"
          />
          Birds of the Amazon
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbar-nav">
          <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/articles">
                Articles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about_us">
                About&#8239;Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import { useCart } from "../CartContext";
import { Link } from 'react-router-dom';
import logo from "../assets/swiggy/logo.jpg";
function Navbar() {
  const { getCartCount } = useCart(); // Must be defined in context

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 py-2">
      {/* Logo */}
      <Link className="navbar-brand me-5 fw-bold" to="/">
        <img src= {logo} alt="Swiggy Logo" style={{ height: "32px "}} />
      </Link>

      {/* "Other" dropdown */}
      <div className="dropdown me-4">
        <a className="nav-link dropdown-toggle  text-decoration-underline" href="#" role="button" data-bs-toggle="dropdown">
          Other
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Location 1</a></li>
          <li><a className="dropdown-item" href="#">Location 2</a></li>
        </ul>
      </div>

      {/* Middle nav links */}
      <div className="d-flex align-items-center gap-5 flex-grow-1">
        <a className="nav-link d-flex align-items-center gap-1 " href="#">
          <i className="bi bi-briefcase"></i> <span>Swiggy Corporate</span>
        </a>
        <a className="nav-link d-flex align-items-center gap-1 " href="#">
          <i className="bi bi-search"></i> <span>Search</span>
        </a>
        <div className="position-relative">
          <a className="nav-link d-flex align-items-center gap-1 " href="#">
            <i className="bi bi-percent"></i> <span>Offers</span>
          </a>
          <span className="position-absolute top-0 start-100 translate-middle">
            <span className="badge rounded-pill bg-danger" style={{ fontSize: "10px", padding: "2px 5px" }}>NEW</span>
          </span>
        </div>
        <a className="nav-link d-flex align-items-center gap-1 " href="#">
          <i className="bi bi-question-circle"></i> <span>Help</span>
        </a>
        <a className="nav-link d-flex align-items-center gap-1 " href="#">
          <i className="bi bi-person"></i> <span>Sign In</span>
        </a>

        {/* Cart Button with Count from Context */}
        <Link className="btn btn-outline-dark position-relative" to="/cart">
          <i className="bi bi-cart"></i> Cart
          {getCartCount() > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {getCartCount()}
            </span>
          )}
        </Link>
      </div>

      
    </nav>
  );
}

export default Navbar;
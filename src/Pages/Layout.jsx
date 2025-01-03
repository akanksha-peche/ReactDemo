import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css'; // Import the CSS file

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Blogs" className="navbar-link">Blogs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Contact" className="navbar-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;

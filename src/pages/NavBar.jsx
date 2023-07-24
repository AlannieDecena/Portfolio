import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
        <nav className="navbar">
        <div className="headName">Portfolio</div>
        <div className="navbarLinks">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Projects
              </NavLink>
            </li>
        </div>
      </nav>
    </div>
  )
}

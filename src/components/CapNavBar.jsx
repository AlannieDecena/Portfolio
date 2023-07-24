import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function CapNavBar() {
  return (
    <div>
        <nav className="capNavbar">

        <div className="capNavbarLinks">
            <a>
              <NavLink to="/">
                Home
              </NavLink>
            </a>
            <a>
              <NavLink href="/">
                About
              </NavLink>
            </a>
            <a>
              <NavLink to="/">
                Projects
              </NavLink>
            </a>
        </div>
      </nav>
    </div>
  )
}

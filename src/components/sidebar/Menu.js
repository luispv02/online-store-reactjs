import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
        <div className="menu__content">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Home appliances</NavLink>
                </li>
                <li>
                    <NavLink to="/fashion">Fashion</NavLink>
                </li>
                <li>
                    <NavLink to="/pets">Pets</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu
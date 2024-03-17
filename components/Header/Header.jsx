import React from "react"
import { NavLink, useLocation } from "react-router-dom"

import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg"
import logoIcon from "../../assets/shared/desktop/logo.svg"
import cartIcon from "../../assets/shared/desktop/icon-cart.svg"

import "./Header.css"

export default function Header() {
    const location = useLocation()

    const locationPathname = location.pathname

    return(
        <header 
            style={{
                background: locationPathname === "/" ? "#191919" : "#000"
            }}
        >
            <img src={hamburgerIcon} alt="Hamburger Icon" /> 

            <NavLink to="/">
                <img src={logoIcon} alt="Logo" /> 
            </NavLink>

            <img src={cartIcon} alt="Cart Icon" />
        </header>
    )
}
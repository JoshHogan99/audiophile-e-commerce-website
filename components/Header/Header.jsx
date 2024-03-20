import React, {useState} from "react"
import {NavLink, useLocation} from "react-router-dom"

import Cart from "../Cart/Cart.jsx"

import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg"
import logoIcon from "../../assets/shared/desktop/logo.svg"
import cartIcon from "../../assets/shared/desktop/icon-cart.svg"

import "./Header.css"

export default function Header() {
    const [showNav, setShowNav] = useState(false)
    const [showCart, setShowCart] = useState(false)

    const location = useLocation()
    const locationPathname = location.pathname

    function handleNav(){
        setShowNav(setShowNav => !setShowNav)
    }

    function handleCart(){
        setShowCart(setShowCart => !setShowCart)
    }

    return(
        <header 
            style={{
                background: locationPathname === "/" ? "#191919" : "#000"
            }}
        >
            <img src={hamburgerIcon} alt="Hamburger Icon" onClick={handleNav} /> 

            <NavLink to="/">
                <img src={logoIcon} alt="Logo" /> 
            </NavLink>

            <img src={cartIcon} alt="Cart Icon" onClick={handleCart} />

            {showNav && <div className="page-overlay" onClick={handleNav}></div>}

            {/* {showNav && (
                <div className="header-navlinks">
                    <NavLink to="/about">OUR COMPANY</NavLink>
                    <NavLink to="/locations">LOCATIONS</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            )} */}

            {showCart && <div className="page-overlay" onClick={handleCart} ></div>}

            {showCart && (
                <Cart />
            )}
        </header>
    )
}
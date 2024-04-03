import React, {useEffect, useState} from "react"
import {NavLink, useLocation} from "react-router-dom"

import Category from "../Category/Category.jsx"
import Cart from "../Cart/Cart.jsx"

import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg"
import logoIcon from "../../assets/shared/desktop/logo.svg"
import cartIcon from "../../assets/shared/desktop/icon-cart.svg"

import "./Header.css"

export default function Header({cartItems, cartTotal, setQuantity, handleCartClear}) {
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

    useEffect(() => {
        if(showNav || showCart){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
    }, [showNav, showCart])

    return(
        <header 
            style={{
                background: locationPathname === "/" ? "#191919" : "#000"
            }}
        >
            <img src={hamburgerIcon} className="hamburger" alt="Hamburger Icon" onClick={handleNav} /> 

            <NavLink to="/">
                <img src={logoIcon} className="logo" alt="Logo" /> 
            </NavLink>

            <img src={cartIcon} className="cart" alt="Cart Icon" onClick={handleCart} />

            {showNav && <div className="page-overlay-nav" onClick={handleNav}></div>}

            <div className={`nav ${showNav ? "show" : ""}`}>
                <Category />
            </div>

            {showCart && <div className="page-overlay" onClick={handleCart} ></div>}

            {showCart && (
                <Cart 
                    handleCart={handleCart}
                    cartItems={cartItems}
                    cartTotal={cartTotal}
                    setQuantity={setQuantity}
                    handleCartClear={handleCartClear}
                />
            )}
        </header>
    )
}
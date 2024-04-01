import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

import "./Layout.css"

export default function Layout(){
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []

        setCartItems(storedCartItems)
    }, [])

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

        setCartTotal(total)
    }, [cartItems])

    function setQuantity(id, alter){
        const updatedCartItems = [...cartItems]

        let alterQuantity

        alterQuantity = alter === "add" ? 1 : -1

        updatedCartItems[id] = {
            ...updatedCartItems[id],
            quantity: (updatedCartItems[id].quantity || 0) + alterQuantity
        }

        setCartItems(updatedCartItems)

        localStorage.setItem("cart", JSON.stringify(updatedCartItems))
    }

    function handleCartClear(){
        localStorage.removeItem("cart")

        setCartItems([])
    }

    return(
        <div className="site-wrapper">
            <Header
                cartItems={cartItems}
                cartTotal={cartTotal}
                setQuantity={setQuantity}
                handleCartClear={handleCartClear}
            />
            <main>
                <Outlet 
                    cartItems={cartItems}
                    cartTotal={cartTotal}
                />
            </main>
            <Footer />
        </div>
    )
}
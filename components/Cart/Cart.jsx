import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"

import './Cart.css'

export default function Cart({handleCart}) {
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

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

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []

        setCartItems(storedCartItems)
    }, [])

    function handleCartClear(){
        localStorage.removeItem("cart")

        setCartItems([])
    }

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

        setCartTotal(total)
    }, [cartItems])

    return(
        <div className="cart-container">
            <div className="cart-intro-container">
                <p className="cart-intro-name">CART ({cartItems.length})</p>

                <button 
                    className="cart-intro-button"
                    onClick={handleCartClear}
                >
                    Remove All
                </button>
            </div>

            <div className="cart-inventory-container">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-inventory">
                        <img src={`../../assets/cart/image-${item.slug}.jpg`} />

                        <div className="cart-inventory-name-price-container">
                            <p className="cart-inventory-name">{item.name}</p>

                            <p className="cart-inventory-price">$ {item.price}</p>
                        </div>

                        <button 
                            onClick={() => setQuantity(index, "subtract")}
                            style={item.quantity === 1 ? {cursor: "not-allowed"} : null}
                            disabled={item.quantity === 1} 
                        >
                            -
                        </button>

                        <p>{item.quantity}</p>

                        <button 
                            onClick={() => setQuantity(index, "add")}
                        >
                            +
                        </button> 
                    </div>
                ))}
            </div>
            
            <div className="cart-total-container">
                <p className="cart-total-text">TOTAL</p>

                <p className="cart-total-price">$ {cartTotal}</p>
            </div>

            <NavLink
                to="/checkout"
            >
                <button 
                    className="checkout-button"
                    style={!cartItems.length ? {cursor: "not-allowed"} : null}
                    disabled={!cartItems.length} 
                    onClick={handleCart}
                >
                    CHECKOUT
                </button>
            </NavLink>
        </div>
    )
}
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
        <div id="cart">
            <div className="heading">
                <p className="label">CART ({cartItems.length})</p>

                <button 
                    onClick={handleCartClear}
                >
                    Remove All
                </button>
            </div>

            <div className="products">
                {cartItems.map((item, index) => (
                    <div key={index} className="product">
                        <img src={`../../assets/cart/image-${item.slug}.jpg`} />

                        <p className="name">{item.name} <span>$ {item.price.toLocaleString()}</span></p>

                        <div className="numbers-default">
                            <button 
                                onClick={() => setQuantity(index, "subtract")}
                                style={item.quantity === 1 ? {cursor: "not-allowed"} : null}
                                disabled={item.quantity === 1} 
                            >
                                -
                            </button>

                            <p className="quantity">{item.quantity}</p>

                            <button 
                                onClick={() => setQuantity(index, "add")}
                                style={item.quantity === 5 ? {cursor: "not-allowed"} : null}
                                disabled={item.quantity === 5}
                            >
                                +
                            </button>  
                        </div>
                    </div>
                ))}
            </div>

            <div className="total">
                <p className="label">TOTAL</p>

                <p className="price">$ {cartTotal.toLocaleString()}</p>
            </div>

            <NavLink
                to="/checkout"
            >
                <button 
                    className="button-1"
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
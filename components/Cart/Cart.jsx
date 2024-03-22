import React, {useEffect, useState} from "react"

import xx59Headphones from "../../assets/cart/image-xx59-headphones.jpg"
import xx99MarkOneHeadphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg"
import xx99MarkTwoHeadphones from "../../assets/cart/image-xx99-mark-two-headphones.jpg"
import yx1Earphones from "../../assets/cart/image-yx1-earphones.jpg"
import zx7Speaker from "../../assets/cart/image-zx7-speaker.jpg"
import zx9Speaker from "../../assets/cart/image-zx9-speaker.jpg"

import {getProduct} from "../../api"

import './Cart.css'

export default function Cart() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    const [quantity, setQuantity] = useState(1)

    function addQuantity(){
        setQuantity(setQuantity => setQuantity+1)
    }

    function subtractQuantity(){
        setQuantity(setQuantity => setQuantity-1)
    }

    const subtractButtonStyles = quantity === 1 ? {cursor: "not-allowed"} : null
    const addButtonStyles = quantity === 5 ? {cursor: "not-allowed"} : null

    if(loading){
        return <h2>Loading...</h2>
    }
    
    if(error){
        return <h2>There was an error: {error.message}</h2>
    }

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []

        setCartItems(storedCartItems)
    }, [])

    function handleCartClear(){
        localStorage.clear()

        setCartItems([])
    }

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0)
        setCartTotal(total)
    }, [cartItems])

    return(
        <div className="cart-container">
            <div className="cart-intro-container">
                <p className="cart-intro-name">CART ({cartItems.length})</p>

                <button 
                    className="cart-intro-button"
                    onClick={() => handleCartClear()}
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
                            onClick={subtractQuantity}
                            disabled={quantity === 1}
                            style={subtractButtonStyles}
                        >
                            -
                        </button>

                        <p>{quantity}</p>

                        <button 
                            onClick={addQuantity}
                            disabled={quantity === 5}
                            style={addButtonStyles}
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

            <button className="checkout-button">
                CHECKOUT
            </button>
        </div>
    )
}
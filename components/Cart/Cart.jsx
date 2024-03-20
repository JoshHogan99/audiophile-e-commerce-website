import React, {useState} from "react"

import xx59Headphones from "../../assets/cart/image-xx59-headphones.jpg"
import xx99MarkOneHeadphones from "../../assets/cart/image-xx99-mark-one-headphones.jpg"
import xx99MarkTwoHeadphones from "../../assets/cart/image-xx99-mark-two-headphones.jpg"
import yx1Earphones from "../../assets/cart/image-yx1-earphones.jpg"
import zx7Speaker from "../../assets/cart/image-zx7-speaker.jpg"
import zx9Speaker from "../../assets/cart/image-zx9-speaker.jpg"

import './Cart.css'

export default function Cart() {
    const [quantity, setQuantity] = useState(1)

    function addQuantity(){
        setQuantity(setQuantity => setQuantity+1)
    }

    function subtractQuantity(){
        setQuantity(setQuantity => setQuantity-1)
    }

    const subtractButtonStyles = quantity === 1 ? {cursor: "not-allowed"} : null
    const addButtonStyles = quantity === 5 ? {cursor: "not-allowed"} : null

    const quantityButtonElement = (
        <div className="cart-quantity-button">
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
    )

    return(
        <div className="cart-container">
            <div className="cart-intro-container">
                <p className="cart-intro-name">CART (3)</p>

                <button className="cart-intro-button">Remove All</button>
            </div>

            <div className="cart-inventory-container">
                <div className="cart-inventory">
                    <img src={xx59Headphones} />

                    <div className="cart-inventory-name-price-container">
                        <p className="cart-inventory-name">XX99 MK II</p>
                        <p className="cart-inventory-price">$ 2,999</p>
                    </div>

                    {quantityButtonElement}
                </div>

                <div className="cart-inventory">
                    <img src={xx99MarkOneHeadphones} />

                    <div className="cart-inventory-name-price-container">
                        <p className="cart-inventory-name">XX99 MK II</p>
                        <p className="cart-inventory-price">$ 2,999</p>
                    </div>

                    {quantityButtonElement}
                </div>

                <div className="cart-inventory">
                    <img src={xx99MarkTwoHeadphones} />

                    <div className="cart-inventory-name-price-container">
                        <p className="cart-inventory-name">XX99 MK II</p>
                        <p className="cart-inventory-price">$ 2,999</p>
                    </div>

                    {quantityButtonElement}
                </div>
            </div>

            <div className="cart-total-container">
                <p className="cart-total-text">TOTAL</p>
                <p className="cart-total-price">$ 5,396</p>
            </div>

            <button className="checkout-button">
                CHECKOUT
            </button>
        </div>
    )
}
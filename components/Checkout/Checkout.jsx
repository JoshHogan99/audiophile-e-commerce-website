import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"

import "./Checkout.css"

export default function Checkout() {
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    const [eMoney, setEMoney] = useState(false)

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []

        setCartItems(storedCartItems)
    }, [])

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

        setCartTotal(total)
    }, [cartItems])

    return(
        <div className="checkout-container">
            <NavLink
                to={`..`}
                relative="path"
                className="go-back-btn"
            >
                Go Back
            </NavLink>

            <div className="checkout-form">
                <h4>CHECKOUT</h4>

                <form>
                    <div className="form-billing inner">
                        <p className="sub-title orange">BILLING DETAILS</p>

                        <label for="name">
                            Name

                            <input type="text" id="name" name="name" placeholder="Alexei Ward" />
                        </label>
                        

                        <label for="email">
                            Email Address

                            <input type="email" id="email" name="email" placeholder="alexei@mail.com" />
                        </label>

                        <label for="phone">
                            Phone Number

                            <input type="number" id="phone" name="phone" placeholder="+1 202-555-0136" />
                        </label>
                        
                    </div>

                    <div className="form-shipping inner">
                        <p className="sub-title orange">SHIPPING INFO</p>

                        <label for="address">
                            Your Address

                            <input type="text" id="address" name="address" placeholder="1137 Williams Avenue" />
                        </label>

                        <label for="zip-code">
                            ZIP Code

                            <input type="text" id="zip-code" name="zip-code" placeholder="10001" />
                        </label>

                        <label for="city">
                            City

                            <input type="text" id="city" name="city" placeholder="New York" />
                        </label>

                        <label for="country">
                            Country

                            <input type="text" id="country" name="country" placeholder="United States" />
                        </label>
                    </div>

                    <div className="form-payment">
                        <p className="sub-title orange">PAYMENT DETAILS</p>

                        <label for="payment-method">
                            Payment Method
                        </label>

                        <label className="radio" for="e-money">
                            <input 
                                type="radio" 
                                id="e-money" 
                                name="payment-method" 
                                value="e-Money" 
                                onClick={() => setEMoney(true)} 
                            />

                            e-Money
                        </label>

                        <label className="radio" for="cash">
                            <input 
                                type="radio" 
                                id="cash" 
                                name="payment-method" 
                                value="Cash on Delivery" 
                                onClick={() => setEMoney(false)} 
                            />
                            
                            Cash on Delivery
                        </label>
                    </div>

                    {eMoney && (
                        <>
                            <label for="e-money-number">e-Money Number</label>
                            <input type="text" id="e-money-number" name="e-money-number" placeholder="238512993" />
        
                            <label for="e-money-pin">e-Money PIN</label>
                            <input type="text" id="e-money-pin" name="e-money-pin" placeholder="6891" />
                        </>
                    )}
                </form>
            </div>

            <div className="checkout">
                <div className="cart-intro-container">
                    <h6>SUMMARY</h6>
                </div>

                <div className="cart-inventory-container">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-inventory">
                            <div className="cart-inventory-extra">
                                <img src={`../../assets/cart/image-${item.slug}.jpg`} />

                                <div className="cart-inventory-name-price-container">
                                    <p className="cart-inventory-name">{item.name}</p>

                                    <p className="cart-inventory-price">$ {item.price}</p>
                                </div>
                            </div>

                            <p className="opacity fw-700">x{item.quantity}</p>
                        </div>
                    ))}

                    <div className="cart-total">
                        <div className="cart-total-container">
                            <p className="cart-total-text">TOTAL</p>

                            <p className="cart-total-price">$ {cartTotal}</p>
                        </div>

                        <div className="cart-total-container">
                            <p className="cart-total-text">SHIPPING</p>

                            <p className="cart-total-price">$ 50</p>
                        </div>

                        <div className="cart-total-container">
                            <p className="cart-total-text">VAT (INCLUDED)</p>

                            <p className="cart-total-price">$ {cartTotal / 5}</p>
                        </div>
                    </div>

                    <div className="cart-total-container grand">
                        <p className="cart-total-text">GRAND TOTAL</p>

                        <p className="cart-total-price">$ {cartTotal + 50}</p>
                    </div>
                </div>

                <button className="checkout-button">
                    CONTINUE & PAY
                </button>
            </div>
        </div>
    )
}
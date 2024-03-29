import React, {useEffect, useState} from "react"
import {NavLink, Navigate} from "react-router-dom"

import "./Checkout.css"

import iconOrderConfirmation from "../../assets/checkout/icon-order-confirmation.svg"

export default function Checkout() {
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [eMoney, setEMoney] = useState(false)
    const [cashDelivery, setCashDelivery] = useState(false)
    const [data, setData] = useState([])
    const [showCheckout, setShowCheckout] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []

        setCartItems(storedCartItems)
        setLoading(false)
    }, [])

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

        setCartTotal(total)
    }, [cartItems])

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        setData(Object.fromEntries(formData))

        event.target.reset()

        setEMoney(false)
        setCashDelivery(false)

        window.scrollTo({top: 0})
    }

    function handleCheckout(){
        setShowCheckout(setShowCheckout => !setShowCheckout)

        localStorage.removeItem("cart")
    }

    if(loading){
        return <h2>Loading...</h2>
    }

    if(cartItems.length < 1){
        return <Navigate to="/" replace={true} />
    }

    return(
        <div id="checkout">
            <NavLink
                to={`..`}
                relative="path"
                className="go-back"
            >
                Go Back
            </NavLink>

            <div className="checkout-form">
                <h4>CHECKOUT</h4>

                <form id="myForm" onSubmit={handleSubmit}>
                    <div className="form-billing inner">
                        <p className="sub-title orange">BILLING DETAILS</p>

                        <label>
                            Name <span>*</span>

                            <input required type="text" id="name" name="name" autoComplete="name" placeholder="Alexei Ward" />
                        </label>
                        

                        <label>
                            Email Address <span>*</span>

                            <input required type="email" id="email" name="email" autoComplete="email" placeholder="alexei@mail.com" />
                        </label>

                        <label>
                            Phone Number <span>*</span>

                            <input required type="tel" id="tel" name="tel" autoComplete="tel" placeholder="+1 202-555-0136" />
                        </label>
                        
                    </div>

                    <div className="form-shipping inner">
                        <p className="sub-title orange">SHIPPING INFO</p>

                        <label>
                            Your Address <span>*</span>

                            <input required type="text" id="address" name="address" autoComplete="on" placeholder="1137 Williams Avenue" />
                        </label>

                        <label>
                            ZIP Code <span>*</span>

                            <input required type="text" id="zip-code" name="zip-code" autoComplete="postal-code" placeholder="10001" />
                        </label>

                        <label>
                            City <span>*</span>

                            <input required type="text" id="city" name="city" autoComplete="address-level2" placeholder="New York" />
                        </label>

                        <label>
                            Country <span>*</span>

                            <input required type="text" id="country" name="country" autoComplete="country" placeholder="United States" />
                        </label>
                    </div>

                    <div className="form-payment">
                        <p className="sub-title orange">PAYMENT DETAILS</p>

                        <p className="sub-title">Payment Method <span>*</span></p>

                        <label 
                            className="radio" 
                            style={
                                eMoney 
                                ? {border: "1px solid #D87D4A"} 
                                : {border: "1px solid #CFCFCF"}
                            }
                        >
                            <input 
                                required
                                type="radio" 
                                id="e-money" 
                                name="payment-method" 
                                value="e-Money" 
                                onClick={() => {setEMoney(true); setCashDelivery(false)}} 
                            />

                            e-Money
                        </label>

                        <label 
                            className="radio" 
                            style={
                                cashDelivery 
                                ? {border: "1px solid #D87D4A"} 
                                : {border: "1px solid #CFCFCF"}
                            }
                        >
                            <input 
                                required
                                type="radio" 
                                id="cash" 
                                name="payment-method" 
                                value="Cash on Delivery" 
                                onClick={() => {setEMoney(false); setCashDelivery(true)}} 
                            />
                            
                            Cash on Delivery
                        </label>
                    </div>

                    {eMoney && (
                        <div className="e-money-container">
                            <label>
                                e-Money Number

                                <input required type="text" id="e-money-number" name="e-money-number" autoComplete="off" placeholder="238512993" />
                            </label>
        
                            <label>
                                e-Money PIN

                                <input required type="text" id="e-money-pin" name="e-money-pin" autoComplete="off" placeholder="6891" />
                            </label>
                        </div>
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

                <button onClick={handleCheckout} type="submit" form="myForm" className="checkout-button">
                    CONTINUE & PAY
                </button>
            </div>

            {showCheckout && <div className="page-overlay" onClick={handleCheckout} ></div>}

            {showCheckout && (
                <div className="checkout-confirmation">
                    <img src={iconOrderConfirmation} />

                    <div className="info">
                        <h5>THANK YOU FOR YOUR ORDER</h5>

                        <p className="opacity">You will receive an email confirmation shortly.</p>
                    </div>

                    {cartItems.length ? (
                        <div className="cart-inventory">
                            <div className="cart-inventory-extra">
                                <img src={`../../assets/cart/image-${cartItems[0].slug}.jpg`} />

                                <div className="cart-inventory-name-price-container">
                                    <p className="cart-inventory-name">{cartItems[0].name}</p>

                                    <p className="cart-inventory-price">$ {cartItems[0].price}</p>
                                </div>

                                <p className="quantity opacity fw-700">x{cartItems[0].quantity}</p>
                            </div>

                            <div className="cart-inventory-other-items">
                                <p className="sub-title opacity">
                                    and {cartItems.length - 1 === 0 ? "no" : cartItems.length - 1} other item(s)
                                </p>
                            </div>

                            <div className="grand-total">
                                <p className="opacity">GRAND TOTAL</p>

                                <h6>$ {cartTotal + 50}</h6>
                            </div>
                        </div>
                        ) : null}

                    <NavLink to="/">
                        <button className="button-1">
                            BACK TO HOME
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    )
}
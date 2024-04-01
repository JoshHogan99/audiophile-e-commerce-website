import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"

import './Cart.css'

export default function Cart({handleCart, cartItems, cartTotal, setQuantity, handleCartClear}) {
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
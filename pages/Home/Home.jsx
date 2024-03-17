import React from "react"

import Category from "../../components/Category/Category.jsx"
import Product from "../../components/Product/Product.jsx"
import SeeProductBtn from "../../components/SeeProductBtn/SeeProductBtn.jsx"

import './Home.css'

export default function Home(){
    return(
        <div className="home">
            <Product 
                name="XX99 MARK II HEADPHONES"
            />

            <div className="sponsored-product-container"> 
                <p className="sponsored-product-new">NEW PRODUCT</p>

                <p className="sponsored-product-name">XX99 MARK II HEADPHONES</p>

                <p className="sponsored-product-description">
                    Experience natural, lifelike audio and exceptional 
                    build quality made for the passionate music enthusiast.
                </p>

                <SeeProductBtn 
                    background="#D87D4A"
                    color="#FFF"
                    border="none"
                />
            </div>

            <Category />

            <div className="featured-products-container">
                <div className="featured-product">

                </div>
            </div>
        </div>
    )
}
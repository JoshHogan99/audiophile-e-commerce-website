import React from "react"
import { NavLink } from "react-router-dom"

import headphonesLogo from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakersLogo from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphonesLogo from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"

import Category from "../../components/Category/Category.jsx"

import './Home.css'

export default function Home() {
    return(
        <div className="home">
            <div className="sponsored-product-container"> 
                <p className="sponsored-product-new">NEW PRODUCT</p>

                <p className="sponsored-product-name">XX99 MARK II HEADPHONES</p>

                <p className="sponsored-product-description">
                    Experience natural, lifelike audio and exceptional 
                    build quality made for the passionate music enthusiast.
                </p>

                <NavLink to="headphones">
                    <button className="sponsored-product-btn">SEE PRODUCT</button>
                </NavLink>
            </div>

            <div className="category-container">
                <Category
                    src={headphonesLogo}
                    alt="Headphones Logo"
                    name="headphones"      
                />
                <Category
                    src={speakersLogo}
                    alt="Speakers Logo"
                    name="speakers"
                />
                <Category
                    src={earphonesLogo}
                    alt="Earphones Logo"
                    name="earphones"
                />
            </div>
        </div>
    )
}
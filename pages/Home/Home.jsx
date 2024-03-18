import React from "react"

import Category from "../../components/Category/Category.jsx"
import SeeProductBtn from "../../components/SeeProductBtn/SeeProductBtn.jsx"

import featuredZX9Speaker from "../../assets/home/mobile/image-speaker-zx9.png"

import './Home.css'

export default function Home(){
    return(
        <div className="home">
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
                <div className="featured-product-zx9">
                    <div className="oval-one"></div>

                    <div className="oval-two"></div>
                    
                    <img 
                        src={featuredZX9Speaker}
                        alt="Speaker Logo"
                        className="featured-product-img-zx9"
                    />

                    <div className="featured-product-info-zx9">
                        <p className="featured-product-name-zx9">
                            ZX9 <span>SPEAKER</span>
                        </p>

                        <p className="featured-product-desc-zx9">
                            Upgrade to premium speakers that are 
                            phenomenally built to deliver truly 
                            remarkable sound.
                        </p>

                        <SeeProductBtn 
                            background="#000"
                            color="#FFF"
                            border="none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"

import ProductBtn from "../../components/ProductBtn/ProductBtn.jsx"
import Category from "../../components/Category/Category.jsx"
import BestGear from "../../components/BestGear/BestGear.jsx"

import featuredZX9SpeakerMobile from "../../assets/home/mobile/image-speaker-zx9.png"
import featuredZX9SpeakerTablet from "../../assets/home/tablet/image-speaker-zx9.png"
import featuredZX9SpeakerDesktop from "../../assets/home/desktop/image-speaker-zx9.png"

import featuredYX1EarphonesMobile from "../../assets/home/mobile/image-earphones-yx1.jpg"
import featuredYX1EarphonesTablet from "../../assets/home/tablet/image-earphones-yx1.jpg"
import featuredYX1EarphonesDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg"

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

                <ProductBtn 
                    background="#D87D4A"
                    color="#FFF"
                    border="none"
                    text="see product"
                />
            </div>

            <Category />

            <div className="featured-products-container">
                <div className="featured-product-one">
                    <div className="oval-one"></div>

                    <div className="oval-two"></div>
                    
                    <div className="featured-product-img-one-container">
                        <img 
                            src={featuredZX9SpeakerMobile}
                            alt="Speaker Logo"
                            className="featured-product-img-one mobile-img"
                        />

                        <img 
                            src={featuredZX9SpeakerTablet}
                            alt="Speaker Logo"
                            className="featured-product-img-one tablet-img"
                        />

                        <img 
                            src={featuredZX9SpeakerDesktop}
                            alt="Speaker Logo"
                            className="featured-product-img-one desktop-img"
                        />
                    </div>

                    <div className="featured-product-info-one-container">
                        <p className="featured-product-name-one">
                            ZX9 <span>SPEAKER</span>
                        </p>

                        <p className="featured-product-desc-one">
                            Upgrade to premium speakers that are 
                            phenomenally built to deliver truly 
                            remarkable sound.
                        </p>

                        <ProductBtn 
                            background="#000"
                            color="#FFF"
                            border="none"
                            text="see product"
                        />
                    </div>
                </div>

                <div className="featured-product-two">
                    <div className="featured-product-info-two">
                        <p className="featured-product-name-two">
                            ZX7 SPEAKER
                        </p>

                        <ProductBtn 
                            background="transparent"
                            color="#000"
                            border="1px solid #000"
                            text="see product"
                        />
                    </div>
                </div>

                <div className="featured-product-three">
                    <div className="featured-product-img-three-container">
                        <img
                            src={featuredYX1EarphonesMobile}
                            alt="Earphones Logo"
                            className="featured-product-img-three mobile-img"
                        />

                        <img 
                            src={featuredYX1EarphonesTablet}
                            alt="Earphones Logo"
                            className="featured-product-img-three tablet-img"
                        />

                        <img 
                            src={featuredYX1EarphonesDesktop}
                            alt="Earphones Logo"
                            className="featured-product-img-three desktop-img"
                        />
                    </div>

                    <div className="featured-product-info-three">
                        <p className="featured-product-name-three">
                            YX1 EARPHONES
                        </p>

                        <ProductBtn 
                            background="transparent"
                            color="#000"
                            border="1px solid #000"
                            text="see product"
                        />
                    </div>
                </div>
            </div>

            <BestGear />
        </div>
    )
}
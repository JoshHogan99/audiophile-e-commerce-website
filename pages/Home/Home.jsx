import React from "react"
import {NavLink} from "react-router-dom"

import Category from "../../components/Category/Category.jsx"
import BestGear from "../../components/BestGear/BestGear.jsx"

import ZX9SpeakersMobile from "../../assets/home/mobile/image-speaker-zx9.png"
import ZX9SpeakersTablet from "../../assets/home/tablet/image-speaker-zx9.png"
import ZX9SpeakersDesktop from "../../assets/home/desktop/image-speaker-zx9.png"

import YX1EarphonesMobile from "../../assets/home/mobile/image-earphones-yx1.jpg"
import YX1EarphonesTablet from "../../assets/home/tablet/image-earphones-yx1.jpg"
import YX1EarphonesDesktop from "../../assets/home/desktop/image-earphones-yx1.jpg"

import './Home.css'

export default function Home(){
    return(
        <div id="home">
            <div className="featured-product"> 
                <p className="overline">NEW PRODUCT</p>

                <h1>XX99 MARK II HEADPHONES</h1>

                <p className="desc">
                    Experience natural, lifelike audio and exceptional 
                    build quality made for the passionate music enthusiast.
                </p>

                <NavLink to="/headphones/xx99-mark-two-headphones">
                    <button className="button-1">
                        SEE PRODUCT
                    </button>
                </NavLink>
            </div>

            <Category />

            <div className="featured-products">
                <div className="product-one">
                    <div className="oval-one"></div>

                    <div className="oval-two"></div>

                    <div className="oval-three"></div>
                    
                    <img 
                        src={ZX9SpeakersMobile}
                        alt="ZX9 Speakers"
                        className="mobile-img"
                    />

                    <img 
                        src={ZX9SpeakersTablet}
                        alt="ZX9 Speakers"
                        className="tablet-img"
                    />

                    <img 
                        src={ZX9SpeakersDesktop}
                        alt="ZX9 Speakers"
                        className="desktop-img"
                    />

                    <h2>
                        ZX9 <span>SPEAKER</span>
                    </h2>

                    <p>
                        Upgrade to premium speakers that are 
                        phenomenally built to deliver truly 
                        remarkable sound.
                    </p>

                    <NavLink to="/speakers/zx9-speaker">
                        <button className="button-2">
                            SEE PRODUCT
                        </button>
                    </NavLink>
                </div>

                <div className="product-two">
                    <h3>
                        ZX7 SPEAKER
                    </h3>

                    <NavLink to="/speakers/zx7-speaker">
                        <button className="button-2">
                            SEE PRODUCT
                        </button>
                    </NavLink>
                </div>

                <div className="product-three">
                    <img
                        src={YX1EarphonesMobile}
                        alt="YX1 Earphones"
                        className="mobile-img"
                    />

                    <img 
                        src={YX1EarphonesTablet}
                        alt="YX1 Earphones"
                        className="tablet-img"
                    />

                    <img 
                        src={YX1EarphonesDesktop}
                        alt="YX1 Earphones"
                        className="desktop-img"
                    />

                    <div className="info">
                        <h4>
                            YX1 EARPHONES
                        </h4>

                        <NavLink to="/earphones/yx1-earphones">
                            <button className="button-2">
                                SEE PRODUCT
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <BestGear />
        </div>
    )
}
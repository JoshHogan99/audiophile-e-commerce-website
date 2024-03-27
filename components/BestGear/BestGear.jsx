import React from "react"

import bestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg"
import bestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg"
import bestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg"

import "./BestGear.css"

export default function BestGear(){
    return(
        <div id="best-gear">
            <img
                src={bestGearMobile}
                alt="Man wearing headphones looking to the side" 
                className="mobile-img"
            />

            <img
                src={bestGearTablet}
                alt="Man wearing headphones looking to the side" 
                className="tablet-img"
            />

            <img
                src={bestGearDesktop}
                alt="Man wearing headphones looking to the side" 
                className="desktop-img"
            />

            <p className="title">
                BRINGING YOU THE <span>BEST</span> AUDIO GEAR
            </p>

            <p className="desc">
                Located at the heart of New York City, 
                Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. 
                We have a large showroom and luxury 
                demonstration rooms available for 
                you to browse and experience a wide 
                range of our products. Stop by our 
                store to meet some of the fantastic 
                people who make Audiophile the best 
                place to buy your portable audio equipment.
            </p>
        </div>
    )
}
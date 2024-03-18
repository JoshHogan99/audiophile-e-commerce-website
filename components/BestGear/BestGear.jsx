import React from "react"

import bestGearLogo from "../../assets/shared/mobile/image-best-gear.jpg"

import "./BestGear.css"

export default function BestGear(){
    return(
        <div className="best-gear-container">
            <img
                src={bestGearLogo}
                alt="Best Gear Logo" 
                className="best-gear-img"
            />

            <p className="best-gear-title">
                BRINGING YOU THE <span className="gold">BEST</span> AUDIO GEAR
            </p>

            <p className="best-gear-info">
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
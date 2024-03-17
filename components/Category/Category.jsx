import React from "react"
import { NavLink } from "react-router-dom"

import headphonesLogo from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakersLogo from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphonesLogo from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"
import arrowIcon from "../../assets/shared/desktop/icon-arrow-right.svg"

import "./Category.css"

export default function Category() {
    return(
        <div className="category-container">
            <div className="category">
                <img
                    src={headphonesLogo}
                    alt="Headphones Logo" 
                    className="category-img"
                />

                <p className="category-name">HEADPHONES</p>

                <NavLink
                    to="/headphones"
                    className="category-shop"
                >
                    <p className="category-shop-text">SHOP</p> <span><img src={arrowIcon} alt="Arrow Icon" /></span>
                </NavLink>
            </div>

            <div className="category">
                <img
                    src={speakersLogo}
                    alt="Speakers Logo" 
                    className="category-img"
                />

                <p className="category-name">SPEAKERS</p>

                <NavLink
                    to="/speakers"
                    className="category-shop"
                >
                    <p className="category-shop-text">SHOP</p> <span><img src={arrowIcon} alt="Arrow Icon" /></span>
                </NavLink>
            </div>

            <div className="category">
                <img
                    src={earphonesLogo}
                    alt="Earphones Logo" 
                    className="category-img earphones"
                />

                <p className="category-name">EARPHONES</p>

                <NavLink
                    to="/earphones"
                    className="category-shop"
                >
                    <p className="category-shop-text">SHOP</p> <span><img src={arrowIcon} alt="Arrow Icon" /></span>
                </NavLink>
            </div>
        </div>
    )
}
import React from "react"
import {NavLink} from "react-router-dom"

import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png"

import arrowIcon from "../../assets/shared/desktop/icon-arrow-right.svg"

import "./Category.css"

export default function Category() {
    return(
        <div id="category">
            <div>
                <img
                    src={headphones}
                    alt="XX99 MARK 1 Headphones"
                    className="headphones img"
                />

                <p>HEADPHONES</p>

                <NavLink
                    to="/headphones"
                >
                    <button className="button-3">SHOP</button>

                    <img src={arrowIcon} alt="Arrow Icon" />
                </NavLink>
            </div>

            <div>
                <img
                    src={speakers}
                    alt="ZX9 Speakers"
                    className="speakers img" 
                />

                <p>SPEAKERS</p>

                <NavLink
                    to="/speakers"
                >
                    <button className="button-3">SHOP</button>

                    <img src={arrowIcon} alt="Arrow Icon" />
                </NavLink>
            </div>

            <div>
                <img
                    src={earphones}
                    alt="YX1 Earphones"
                    className="earphones img"
                />

                <p>EARPHONES</p>

                <NavLink
                    to="/earphones"
                >
                    <button className="button-3">SHOP</button>

                    <img src={arrowIcon} alt="Arrow Icon" />
                </NavLink>
            </div>
        </div>
    )
}
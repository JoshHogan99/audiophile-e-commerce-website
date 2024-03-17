import React from "react"
import { NavLink } from "react-router-dom"

import arrowIcon from "../../assets/shared/desktop/icon-arrow-right.svg"

import "./Category.css"

export default function Category({ src, alt, name }) {
    return(
        <div className="category">
            <img 
                src={src}
                alt={alt}
                className={`category-img ${name}`}
            />

            <p className="category-name">{name}</p>

            <NavLink
                to={`/${name}`}
                className="category-shop"
            >
                <p className="category-shop-text">SHOP</p> <span><img src={arrowIcon} alt="Arrow Icon" /></span>
            </NavLink>
        </div>
    )
}
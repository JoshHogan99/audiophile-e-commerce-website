import React from "react"
import {NavLink} from "react-router-dom"

import "./SeeProductBtn.css"

export default function SeeProductBtn({background, color, border}){
    const styles = {
        background,
        color,
        border
    }

    return(
        <NavLink 
            to="headphones"
        >
            <button className="see-product-btn" style={styles}>SEE PRODUCT</button>
        </NavLink>
    )
}
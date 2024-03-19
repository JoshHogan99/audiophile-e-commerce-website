import React from "react"

import "./ProductBtn.css"

export default function SeeProductBtn({background, color, border, text}){
    const styles = {
        background,
        color,
        border
    }

    return(
        <button className="product-btn" style={styles}>{text}</button>
    )
}
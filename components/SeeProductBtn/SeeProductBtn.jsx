import React from "react"

import "./SeeProductBtn.css"

export default function SeeProductBtn({background, color, border}){
    const styles = {
        background,
        color,
        border
    }

    return(
        <button className="see-product-btn" style={styles}>SEE PRODUCT</button>
    )
}
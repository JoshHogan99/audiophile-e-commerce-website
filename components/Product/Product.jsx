import React from "react"

export default function Product({isNew, name, desc}){
    return(
        <div className="product-container">
            {isNew ? <p className="product-new">NEW PRODUCT</p> : null}

            <p className="product-name">{name}</p>

            <p className="product-description">{desc}</p>
        </div>
    )
}
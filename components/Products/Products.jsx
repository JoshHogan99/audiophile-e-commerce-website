import React from "react"

import "./Products.css"

import data from "../../data.json"

export default function Products({ products }) {
    const filteredProducts = data
        .filter(product => product.category.includes(products))
        .map(product => (
            <div key={product.id} className="product-container">
                <img src={product.categoryImage.mobile} alt="Product" className="product-img" />

                {product.new ? <p className="product-new">NEW PRODUCT</p> : null}

                <p className="product-name">{product.name}</p>

                <p className="product-info">{product.description}</p>

                <button className="product-btn">SEE PRODUCT</button>
            </div>
        ))

    return (
        <div className="products-container">
            <div className="products-banner">
                <h1>{products}</h1>
            </div>

            {filteredProducts}
        </div>
    )
}
import React, {useState, useEffect} from "react"
import {NavLink, useParams} from "react-router-dom"

import {getProduct} from "../../api"
import ProductBtn from "../ProductBtn/ProductBtn"

import "./Product.css"

export default function Product(){
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        async function loadProducts(){
            setLoading(true)
            try{
                const data = await getProduct(id)
                setProduct(data)
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }

        loadProducts()
    }, [id])

    if(loading){
        return <h2>Loading...</h2>
    }
    
    if(error){
        return <h2>There was an error: {error.message}</h2>
    }

    function addQuantity(){
        setQuantity(quantity+1)
    }

    function subtractQuantity(){
        setQuantity(quantity-1)
    }

    const includesElement = product ? product.includes.map(includesInfo => {
        return(
            <div className="selected-products-includes-info">
                <p className="selected-products-includes-quantity">
                    {includesInfo.quantity}x
                </p>

                <p className="selected-products-includes-item">
                    {includesInfo.item}
                </p>
            </div>
        )
    }) : null

    return(
        <div className="selected-products-container">
            <NavLink
                to={`..`}
                relative="path"
            >
                Go Back
            </NavLink>

            {product && (
                <div className="selected-product">
                    <img 
                        src={`../.${product.image.mobile}`}
                        alt={`${product.name} Logo`} 
                        className="selected-product-img mobile"
                    />

                    <img 
                        src={`../.${product.image.tablet}`} 
                        alt={`${product.name} Logo`} 
                        className="selected-product-img tablet" 
                    />

                    <img 
                        src={`../.${product.image.desktop}`} 
                        alt={`${product.name} Logo`} 
                        className="selected-product-img desktop" 
                    />

                    <div className="selected-product-info">
                        {product.new ? <p className="new-product">NEW PRODUCT</p> : null}

                        <p className="selected-product-name">{product.name}<span> {product.category}</span></p>

                        <p className="selected-product-desc">{product.description}</p>

                        <p className="selected-product-price">$ {product.price.toLocaleString()}</p>
            
                        <div className="quantity-container">
                            <button 
                                onClick={subtractQuantity}
                                disabled={quantity === 1}
                            >
                                -
                            </button>
                            {quantity}
                            <button 
                                onClick={addQuantity}
                                disabled={quantity === 10}
                            >
                                +
                            </button>

                            <ProductBtn 
                                background="#D87D4A"
                                color="#FFF"
                                border="none"
                                text="add to cart"
                            />
                        </div>

                        <div className="selected-product-features-container">
                            <p className="selected-product-features-title">FEATURES</p>

                            <p className="selected-product-features-info"> 
                                {product.features}
                            </p>
                        </div>

                        <div className="selected-product-includes-container">
                            <p className="selected-product-includes-title">IN THE BOX</p>

                            {includesElement}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
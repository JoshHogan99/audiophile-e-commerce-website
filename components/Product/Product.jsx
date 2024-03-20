import React, {useState, useEffect} from "react"
import {NavLink, useParams} from "react-router-dom"

import {getProduct} from "../../api"
import ProductBtn from "../ProductBtn/ProductBtn"
import Category from "../../components/Category/Category.jsx"
import BestGear from "../../components/BestGear/BestGear.jsx"
import QuantityButton from "../QuantityButton/QuantityButton.jsx"

import "./Product.css"

export default function Product(){
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()

    console.log(location)

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

    const includesElement = product ? product.includes.map(includesInfo => {
        return(
            <div className="selected-product-includes-info">
                <p className="selected-product-includes-quantity">
                    {includesInfo.quantity}x
                </p>

                <p className="selected-product-includes-item">
                    {includesInfo.item}
                </p>
            </div>
        )
    }) : null

    const formattedFeatures = product ? product.features.replace(/\.([^ ])/g, '.<br><br>$1') : null

    const othersElement = product ? product.others.map(othersInfo => {
        return(
            <div className="selected-product-others-info">
                <img 
                    src={`../.${othersInfo.image.mobile}`} 
                    alt={othersInfo.slug}
                    className="mobile" 
                />

                <img 
                    src={`../.${othersInfo.image.tablet}`} 
                    alt={othersInfo.slug}
                    className="tablet" 
                />

                <img 
                    src={`../.${othersInfo.image.desktop}`} 
                    alt={othersInfo.slug}
                    className="desktop" 
                />

                <p className="selected-product-others-name">
                    {othersInfo.name}
                </p>

                <NavLink
                    to={`../${othersInfo.category}/${othersInfo.slug}`}
                >
                    <ProductBtn 
                        background="#D87D4A"
                        color="#FFF"
                        border="none"
                        text="see product"
                    />
                </NavLink>
            </div>
        )
    }) : null

    return(
        <div className="selected-products-container">
            <NavLink
                to={`..`}
                relative="path"
                className="go-back-btn"
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
                            <QuantityButton />

                            <ProductBtn 
                                background="#D87D4A"
                                color="#FFF"
                                border="none"
                                text="add to cart"
                            />
                        </div>

                        <div className="selected-product-features-container">
                            <p className="selected-product-features-title">FEATURES</p>

                            <p 
                                className="selected-product-features-info" 
                                dangerouslySetInnerHTML={{__html: formattedFeatures}}
                            >
                            </p>
                        </div>

                        <div className="selected-product-includes-container">
                            <p className="selected-product-includes-title">IN THE BOX</p>

                            <div className="selected-product-includes-info-container">
                                {includesElement} 
                            </div>
                        </div>

                        <div className="selected-product-gallery-container">
                            <img 
                                src={`../.${product.gallery.first.mobile}`} 
                                alt="Gallery Logo One"
                                className="mobile" 
                            />

                            <img 
                                src={`../.${product.gallery.first.tablet}`} 
                                alt="Gallery Logo One"
                                className="tablet" 
                            />

                            <img 
                                src={`../.${product.gallery.first.desktop}`} 
                                alt="Gallery Logo One"
                                className="desktop" 
                            />

                            <img 
                                src={`../.${product.gallery.second.mobile}`} 
                                alt="Gallery Logo Two"
                                className="mobile" 
                            />

                            <img 
                                src={`../.${product.gallery.second.tablet}`} 
                                alt="Gallery Logo Two"
                                className="tablet" 
                            />

                            <img 
                                src={`../.${product.gallery.second.desktop}`} 
                                alt="Gallery Logo Two"
                                className="desktop" 
                            />

                            <img 
                                src={`../.${product.gallery.third.mobile}`} 
                                alt="Gallery Logo Three"
                                className="mobile" 
                            />

                            <img 
                                src={`../.${product.gallery.third.tablet}`} 
                                alt="Gallery Logo Three"
                                className="tablet" 
                            />

                            <img 
                                src={`../.${product.gallery.third.desktop}`} 
                                alt="Gallery Logo Three"
                                className="desktop" 
                            />
                        </div>

                        <div className="selected-product-others-container">
                            <p className="selected-product-others">
                                YOU MAY ALSO LIKE
                            </p>

                            <div className="selected-product-others-info-container">
                                {othersElement}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Category />

            <BestGear />
        </div>
    )
}
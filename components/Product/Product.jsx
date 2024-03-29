import React, {useState, useEffect} from "react"
import {NavLink, useParams} from "react-router-dom"

import {getProduct} from "../../api"

import Category from "../../components/Category/Category.jsx"
import BestGear from "../../components/BestGear/BestGear.jsx"

import "./Product.css"

export default function Product(){
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()
    const [quantity, setQuantity] = useState(1)

    function addQuantity(){
        setQuantity(setQuantity => setQuantity+1)
    }

    function subtractQuantity(){
        setQuantity(setQuantity => setQuantity-1)
    }

    const subtractButtonStyles = quantity === 1 ? {cursor: "not-allowed"} : null
    const addButtonStyles = quantity === 5 ? {cursor: "not-allowed"} : null

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
        return <p className="issue">Loading...</p>
    }
    
    if(error){
        return <p className="issue">There was an error: {error.message}</p>
    }

    const includesElement = product ? product.includes.map((includesInfo, index) => {
        return(
            <div key={index} className="includes">
                <p className="quantity">
                    {includesInfo.quantity}x
                </p>

                <p className="item">
                    {includesInfo.item}
                </p>
            </div>
        )
    }) : null

    const formattedFeatures = product ? product.features.replace(/\.([^ ])/g, '.<br><br>$1') : null

    const othersElement = product ? product.others.map((othersInfo, index) => {
        return(
            <div key={index} className="others">
                <img 
                    src={`../.${othersInfo.image.mobile}`} 
                    alt={othersInfo.slug}
                    className="mobile-img" 
                />

                <img 
                    src={`../.${othersInfo.image.tablet}`} 
                    alt={othersInfo.slug}
                    className="tablet-img" 
                />

                <img 
                    src={`../.${othersInfo.image.desktop}`} 
                    alt={othersInfo.slug}
                    className="desktop-img" 
                />

                <p className="name">
                    {othersInfo.name}
                </p>

                <NavLink to={`../${othersInfo.category}/${othersInfo.slug}`}>
                    <button className="button-1">
                        SEE PRODUCT
                    </button>
                </NavLink>
            </div>
        )
    }) : null

    function handleCart(slug, name, price, quantity){
        const product = {
            slug: slug,
            name: name,
            price: price,
            quantity: quantity
        }

        const existingCartItems = JSON.parse(localStorage.getItem("cart")) || []

        const updatedCartItems = [...existingCartItems, product]

        localStorage.setItem("cart", JSON.stringify(updatedCartItems))
    }

    return(
        <div id="product">
            <NavLink
                to={`..`}
                relative="path"
                className="go-back"
            >
                Go Back
            </NavLink>

            {product && (
                <div className="product">
                    <img 
                        src={`../.${product.image.mobile}`}
                        alt={product.name} 
                        className="mobile-img"
                    />

                    <img 
                        src={`../.${product.image.tablet}`} 
                        alt={product.name}
                        className="tablet-img" 
                    />

                    <img 
                        src={`../.${product.image.desktop}`} 
                        alt={product.name}
                        className="desktop-img" 
                    />

                    {product.new ? <p className="overline">NEW PRODUCT</p> : null}

                    <h1 className="name">{product.name}<span> {product.category}</span></h1>

                    <p className="desc">{product.description}</p>

                    <p className="price">$ {product.price.toLocaleString()}</p>
        
                    <div className="numbers-container">
                        <div className="numbers-default">
                            <button
                                onClick={subtractQuantity}
                                disabled={quantity === 1}
                                style={subtractButtonStyles}
                            >
                                -
                            </button>

                            <p className="quantity">{quantity}</p>

                            <button 
                                onClick={addQuantity}
                                disabled={quantity === 5}
                                style={addButtonStyles}
                            >
                                +
                            </button>   
                        </div>

                        <button 
                            className="button-1"
                            onClick={() => handleCart(
                                product.slug,
                                product.cart,
                                product.price,
                                quantity
                            )}
                        >
                            ADD TO CART
                        </button>
                    </div>

                    <h2>FEATURES</h2>

                    <p 
                        dangerouslySetInnerHTML={{__html: formattedFeatures}}
                        className="features"
                    >
                    </p>

                    <h3>IN THE BOX</h3>

                    {includesElement}

                    <img 
                        src={`../.${product.gallery.first.mobile}`} 
                        alt="Man wearing headphones looking to the side"
                        className="mobile-img" 
                    />

                    <img 
                        src={`../.${product.gallery.first.tablet}`} 
                        alt="Man wearing headphones looking to the side"
                        className="tablet-img" 
                    />

                    <img 
                        src={`../.${product.gallery.first.desktop}`} 
                        alt="Man wearing headphones looking to the side"
                        className="desktop-img" 
                    />

                    <img 
                        src={`../.${product.gallery.second.mobile}`} 
                        alt="Headphones on table"
                        className="mobile-img" 
                    />

                    <img 
                        src={`../.${product.gallery.second.tablet}`} 
                        alt="Headphones on table"
                        className="tablet-img" 
                    />

                    <img 
                        src={`../.${product.gallery.second.desktop}`} 
                        alt="Headphones on table"
                        className="desktop-img" 
                    />

                    <img 
                        src={`../.${product.gallery.third.mobile}`} 
                        alt="Headphones earcups"
                        className="mobile-img" 
                    />

                    <img 
                        src={`../.${product.gallery.third.tablet}`} 
                        alt="Headphones earcups"
                        className="tablet-img" 
                    />

                    <img 
                        src={`../.${product.gallery.third.desktop}`} 
                        alt="Headphones earcups"
                        className="desktop-img" 
                    />

                    <h4>YOU MAY ALSO LIKE</h4>

                    {othersElement}
                </div>
            )}

            <Category />

            <BestGear />
        </div>
    )
}
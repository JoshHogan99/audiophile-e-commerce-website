import React, {useState, useEffect} from "react"
import {NavLink, useParams} from "react-router-dom"

import {getProduct} from "../../api"

import "./Product.css"

export default function Product(){
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams()

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

    product ? console.log(product.image.mobile) : null

    return(
        <div className="category-products-container">
            <NavLink
                to={`..`}
                relative="path"
            >
                Go Back
            </NavLink>

            {product && (
                <div className="category-product">
                    <img 
                        src={`../.${product.image.mobile}`}
                        alt={`${product.name} Logo`} 
                        className="category-product-img mobile"
                    />

                    <img 
                        src={`../.${product.image.tablet}`} 
                        alt={`${product.name} Logo`} 
                        className="category-product-img tablet" 
                    />

                    <img 
                        src={`../.${product.image.desktop}`} 
                        alt={`${product.name} Logo`} 
                        className="category-product-img desktop" 
                    />

                    <div className="category-product-info">
                        {product.new ? <p className="new-product">NEW PRODUCT</p> : null}

                        <p className="category-product-name">{product.name}<span> {product.category}</span></p>

                        <p className="category-product-desc">{product.description}</p>

                        <NavLink
                            to={product.id}
                        >
                            
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}
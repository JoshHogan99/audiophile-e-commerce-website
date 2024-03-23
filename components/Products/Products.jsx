import React, {useState, useEffect} from "react"
import {NavLink, useParams, useLocation} from "react-router-dom"

import {getProducts} from "../../api"

import "./Products.css"

export default function Products(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {pathname} = useLocation()
    const category = pathname.slice(1)

    useEffect(() => {
        async function loadProducts(){
            setLoading(true)
            try{
                const data = await getProducts()
                setProducts(data)
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }

        loadProducts()
    }, [])

    const productsFilter = products
        .filter(product => product.category.includes(category))
        .sort((a, b) => {
            if(a.new && !b.new){
                return -1
            }else if(!a.new && b.new){
                return 1
            }else{
                return 0
            }
        })

    const productsElements = productsFilter.map(product => {
        return(
            <div key={product.id} className="category-product">
                <img 
                    src={product.categoryImage.mobile} 
                    alt={`${product.name} Logo`} 
                    className="category-product-img mobile" 
                />

                <img 
                    src={product.categoryImage.tablet} 
                    alt={`${product.name} Logo`} 
                    className="category-product-img tablet" 
                />

                <img 
                    src={product.categoryImage.desktop} 
                    alt={`${product.name} Logo`} 
                    className="category-product-img desktop" 
                />

                <div className="category-product-info">
                    {product.new ? <p className="new-product">NEW PRODUCT</p> : null}

                    <p className="category-product-name">{product.name}<span> {product.category}</span></p>

                    <p className="category-product-desc">{product.description}</p>

                    <NavLink to={product.slug}>
                        <button className="button-1">
                            SEE PRODUCT
                        </button>
                    </NavLink>
                </div>
            </div>
       )
    })

    if(loading){
        return <h2>Loading...</h2>
    }
    
    if(error){
        return <h2>There was an error: {error.message}</h2>
    }

    return(
       <div className="category-products-container">
            <div className="category-products-banner">
                <h4>{category}</h4>
            </div>

            <div className="category-product-container">
                {productsElements}
            </div>
        </div>
    )
}
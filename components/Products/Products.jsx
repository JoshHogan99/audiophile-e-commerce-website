import React, {useState, useEffect} from "react"
import {NavLink, useLocation} from "react-router-dom"

import Category from "../../components/Category/Category.jsx"
import BestGear from "../../components/BestGear/BestGear.jsx"

import arrowIconLeft from "../../assets/shared/desktop/icon-arrow-left.svg"
import arrowIcon from "../../assets/shared/desktop/icon-arrow-right.svg"

import {getProducts} from "../../api"

import "./Products.css"

export default function Products(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
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
            <div key={product.id} className="product">
                <img 
                    src={product.categoryImage.mobile} 
                    alt={product.name} 
                    className="mobile-img" 
                />

                <img 
                    src={product.categoryImage.tablet} 
                    alt={product.name} 
                    className="tablet-img" 
                />

                <img 
                    src={product.categoryImage.desktop} 
                    alt={product.name}
                    className="desktop-img" 
                />

                {product.new ? <p className="overline">NEW PRODUCT</p> : null}

                <p className="name">{product.name}<span> {product.category}</span></p>

                <p className="desc">{product.description}</p>

                <NavLink to={product.slug}>
                    <button className="button-1">
                        SEE PRODUCT
                    </button>
                </NavLink>
            </div>
       )
    })

    if(loading){
        return <p className="issue">Loading...</p>
    }
    
    if(error){
        return <p className="issue">There was an error: {error.message}</p>
    }

    return(
       <div id="products">
            <div className="category">
                <NavLink
                    to={
                        pathname === "/headphones"
                        ? "/earphones"
                        : pathname === "/earphones"
                        ? "/speakers"
                        : "/headphones"
                    }
                >
                    <img src={arrowIconLeft} alt="Arrow Icon" />
                </NavLink>

                <h1>{category}</h1>

                <NavLink
                    to={
                        pathname === "/headphones"
                        ? "/speakers"
                        : pathname === "/speakers"
                        ? "/earphones"
                        : "/headphones"
                    }
                >
                    <img src={arrowIcon} alt="Arrow Icon" />
                </NavLink>
            </div>

            <div className="products">
                {productsElements}
            </div>

            <Category />

            <BestGear />
        </div>
    )
}
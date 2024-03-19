import React from "react"

import Products from "../../../components/Products/Products.jsx"
import Category from "../../../components/Category/Category.jsx"
import BestGear from "../../../components/BestGear/BestGear.jsx"

export default function Speakers(){
    return(
        <>
            <Products 
                category="speakers"
            />

            <Category />

            <BestGear />
        </>
    )
}
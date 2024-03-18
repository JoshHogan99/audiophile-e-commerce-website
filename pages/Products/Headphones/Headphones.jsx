import React from "react"

import Products from "../../../components/Products/Products"
import Category from "../../../components/Category/Category"
import BestGear from "../../../components/BestGear/BestGear"

export default function Headphones(){
    return(
        <>
            <Products 
                category="headphones"
            />

            <Category />

            <BestGear />
        </>
    )
}
import React, {useState} from "react"

import "./QuantityButton.css"

export default function QuantityButton(){
    const [quantity, setQuantity] = useState(1)

    function addQuantity(){
        setQuantity(setQuantity => setQuantity+1)
    }

    function subtractQuantity(){
        setQuantity(setQuantity => setQuantity-1)
    }

    const subtractButtonStyles = quantity === 1 ? {cursor: "not-allowed"} : null
    const addButtonStyles = quantity === 5 ? {cursor: "not-allowed"} : null

    return(
        <div className="quantity-button">
            <button 
                onClick={subtractQuantity}
                disabled={quantity === 1}
                style={subtractButtonStyles}
            >
                -
            </button>

            <p>{quantity}</p>
            
            <button 
                onClick={addQuantity}
                disabled={quantity === 5}
                style={addButtonStyles}
            >
                +
            </button>
        </div>
    )
}
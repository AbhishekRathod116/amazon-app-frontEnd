import React from 'react'
import "./CheckOutProduct.css"
import {useStateValue} from "./StateProvider"


const CheckOutProduct = (props)=>{
    const[{basket},dispatch] = useStateValue()
    console.log(basket)
    const RemoveFromBasket = () =>{
        dispatch({
            type : "Remove_From_Basket",
            id : props.id
        })
    }
    
    return(
        <div className="checkOutProduct">
            <img 
            className="checkOutProduct-image"
            src={props.image}
            alt='No Images'/>
            <div className="checkOutProduct-info">
                <p className="checkOutProduct-title">{props.title}</p>
                <div className="checkOutProduct-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
                <div className="checkOutProduct-rating">
                    {Array(props.rating).fill().map((_,i)=>
                        <p>
                            *
                        </p>
                    )}
                </div>
                <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}
export default CheckOutProduct;
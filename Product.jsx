import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider'


const Product = (props) => {

  const[{basket},dispatch] = useStateValue()
  console.log(basket)
  const AddToBasket = ()=>{
    dispatch ({
      type : "Add_To_Basket",
      item : {
        id :  props.id,
        title : props.title,
        image : props.image,
        price : props.price,
        rating : props.rating
      }
    })
  }
  
  return (
    <div className="product">
        <div className="product-container">
            <p className="product-title">{props.title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product-rating">
                {Array(props.rating).fill().map((_,i)=>(<p>*</p>))}
            </div>
        </div>
        <img 
        className="product-image"
        src={props.image}
        alt="No Images"/>

        <button onClick={AddToBasket}>Add To Cart</button>
    </div>
  )
}

export default Product

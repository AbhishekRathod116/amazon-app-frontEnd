import React from 'react'
import "./CheckOut.css"
import Subtotal from "./Subtotal"
import CheckOutProduct from './CheckOutProduct'
import { useStateValue } from './StateProvider'

const CheckOut = () => {
  const[{basket}] = useStateValue()
  return (
    <div className="checkOut">
        <div className="checkOut-left">
            <img 
            className="checkOut-image"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="No Images"/>
            <div className="checkOut-title">
                <h2>Your Shopping Basket</h2>
            </div>
            {basket.length===0 ? (<p>Your Shopping Basket is Empty😊</p>):
            (basket.map((e)=>(
              <CheckOutProduct
                 id = {e.id}
                 title = {e.title}
                 image = {e.image}
                 price = {e.price}
                 rating = {e.rating}
              />
            ))
              
            )
            }
        </div>
        <div className="checkOut-right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default CheckOut;

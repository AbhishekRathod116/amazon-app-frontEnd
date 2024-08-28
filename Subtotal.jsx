import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

const Subtotal = () => {
    const[{basket}] = useStateValue()
    console.log(basket)
  return (
    <div className="subtotal">
      <strong>Your Order Free Delivery</strong>
      <CurrencyFormat 
        renderText={(value)=>(
          <>
            <p className="subtotal-item">
                Subtotal ({basket.length} Items) : <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox"/> This Order Contain Gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        prefix= {"$"}
        thousandSeparator={true}
        value={getBasketTotal(basket)}
      />
      <button className="subtotal-button">Proceed To Buy</button>
    </div>
  )
}

export default Subtotal

import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

// npm i react-currency-format 

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
  
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal <strong> ({basket?.length} items)</strong>: <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
  
        {/* <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> */}
        <button onClick={e=>history.push('/payment')} >Proceed to Checkout</button>
      </div>
    );
  }
  
  export default Subtotal;


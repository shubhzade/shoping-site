import React from "react";
import "./product.css";
import {useStateValue} from "./StateProvider";



function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

console.log('this is basket',basket)


  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product_ratinng">
            {Array(rating).fill().map((_,i)=>(

          <p>⭐</p>
            ))}
        </div>
      </div>
      <div className="image">
        <img src={image}></img>
        <button onClick={addToBasket}>Add to bascet</button>
      </div>
    </div>
  );
}

export default Product;

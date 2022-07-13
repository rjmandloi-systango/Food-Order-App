import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

export default function MealsList(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <>
      <div key={props.id} className="card mt-5 w-50 container">
        <div className="card-header fw-bolder">{props.name}</div>
        <div className="card-body d-flex">
          <blockquote className="blockquote mb-0">
            <p>{props.description}</p>
            <footer
              className="blockquote-footer fw-bolder"
              style={{ color: "#893c06" }}
            >
              {props.price}&#8377;
            </footer>
          </blockquote>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </>
  );
}

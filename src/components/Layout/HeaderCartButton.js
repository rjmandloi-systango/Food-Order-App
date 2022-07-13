import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

export default function HeaderCartButton(props) {
   const cartCtx= useContext(cartContext)
   const numberOfCartItems=cartCtx.items.reduce((curNumber , item)=>{return curNumber+item.amount} , 0)
    return (
    <React.Fragment>
      <button className="rounded-pill me-3 cart-button" onClick={props.onClick}>
        <CartIcon />
        <span className="fs-5 ms-2 fw-bolder button-text">Your cart</span>
        <span className="rounded-pill cart-count ms-2 me-4 fw-bolder">{numberOfCartItems}</span>
      </button>
    </React.Fragment>
  );
}

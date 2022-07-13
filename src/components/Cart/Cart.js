import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount;
  // console.log(totalAmount);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item , amount:1})

  };
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          onRemove={cartItemRemoveHandler.bind(null ,item.id)}
          onAdd={cartItemAddHandler.bind(null , item )}
          name={item.name}
          amount={item.amount}
          price={item.price}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal>
      <div
        className="modal"
        style={{
          display: "block",
        }}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{cartItems}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span className="fs-4 fw-bolder">Total Amount</span>
              <span className="fs-4 ms-5 fw-bolder">
                {totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              {hasItems && (
                <button type="button" className="btn btn-primary">
                  Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

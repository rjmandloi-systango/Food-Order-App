import React from "react";
import Input from "../UI/Input";
import "../Layout/HeaderCartButton.css";
export default function MealItemForm() {
  return (
    <form>
      <Input
        label={"Amonunt"}
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      ></Input>
      <button className="rounded-pill me-3 cart-button">+Add</button>
    </form>
  );
}

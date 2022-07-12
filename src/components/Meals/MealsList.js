import React from "react";
import MealItemForm from "./MealItemForm";

export default function MealsList(props) {
  return (
   <>
      {props.mealList.map((mealItem) => (
        <div key={mealItem.id} className="card mt-5 w-50 container">
          <div className="card-header fw-bolder">{mealItem.name}</div>
          <div className="card-body d-flex">
            <blockquote className="blockquote mb-0">
              <p>{mealItem.description}</p>
              <footer
                className="blockquote-footer fw-bolder"
                style={{ color: "#893c06" }}
              >
                {mealItem.price}&#8377;
              </footer>
            </blockquote>
          </div>
          <MealItemForm />
        </div>
      ))}
      </>
  );
}

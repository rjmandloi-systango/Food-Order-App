import React from 'react'
import './MealsSummary.css'

export default function MealsSummary() {
    return (
        <div className="card MealsSummary mb-5" style={{ width: '33rem' }}>
            <div className="card-body">
                <h2 className="card-title">Delicious Food, Delivered To You</h2>
                <p className="card-text">
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p className="card-text">
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </div>
        </div>
    )
}


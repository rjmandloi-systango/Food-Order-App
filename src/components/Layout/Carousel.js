import React from 'react'
import mealsImg from '../../assest/meals.jpg'
import './Carousel.css' 


export default function Carousel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={mealsImg} className="d-block w-100 carousel-img" alt="..." />
                </div>
            </div>
        </div>
    )
}

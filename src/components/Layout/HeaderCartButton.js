import React from 'react'
import CartIcon from '../Cart/CartIcon'
import './HeaderCartButton.css'

export default function HeaderCartButton() {
    return (
        <React.Fragment>
            <button className='rounded-pill me-3 cart-button'>
                <CartIcon />
                <span className='fs-5 ms-2 fw-bolder button-text'>Your cart</span>
                <span className='rounded-pill cart-count ms-2 me-4 fw-bolder'>1</span>
            </button>
        </React.Fragment>
    )
}

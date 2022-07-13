import React from 'react'
import HeaderCartButton from './HeaderCartButton'
export default function Navbar(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid"  >
                    <p className="navbar-brand fs-1 fw-bolder ms-5" style={{color:'white'}} >FoodShades</p>
                    <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
                </div>
            </nav>
        </React.Fragment>
    )
}

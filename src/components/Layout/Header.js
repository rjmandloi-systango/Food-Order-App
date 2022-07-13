import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
export default function Header(props) {
    return (
        <React.Fragment>
            <div style={{backgroundColor : '#893c06'}}>
                <Navbar onClick={props.onShowCart}/>
            </div>
            <Carousel/>
        </React.Fragment>
    )
}

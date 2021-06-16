import React, { Component } from 'react';
// import { NavItem } from 'react-bootstrap';
// import BookList from './BookList'
import 'bootstrap/dist/css/bootstrap.min.css'

const handleClick = () => {
    alert ('Book No longer Available for Free. Visit Amazon website to have exclusive access to the book');
}
export default class Books extends Component {
    render() {
        const {item} = this.props
        return (
            <div  className = 'books'>
                <img src = {item.image} alt = 'book' />
                <div>
                <h5>Title: {item.title } </h5>
                <h6>Author: {item.author} </h6>
                <p> Price : {item.price} </p>
                <button type = 'button' onClick = {handleClick} className = 'btn btn-info' > Check It Out </button>
                </div>
            </div>
        )
    }
};

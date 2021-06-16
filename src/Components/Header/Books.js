import React, { Component } from 'react';
// import { NavItem } from 'react-bootstrap';
// import BookList from './BookList'

export default class Books extends Component {
    render() {
        const {item} = this.props
        return (
            <div  className = 'books'>
                <img src = {item.image} alt = 'book' />
                <div>
                <h3>Title: {item.title } </h3>
                <h5>Author: {item.author} </h5>
                <p> Price : {item.price} </p>
                </div>
            </div>
        )
    }
};

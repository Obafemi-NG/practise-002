import React, { Component } from 'react';
import Books from "./Books"
import bigData from './data'

export default class BookList extends Component {
    constructor (props)  {
        super (props);
        this.state = {
            books : bigData
        }
    };
    render () {
        const {books} = this.state;        
        return(
            <div>  
                <p>Hello From Book List!</p>
                {books.map(book => <Books key = {book.id} item = {book} /> )}
                
            </div>
        )
    };
};
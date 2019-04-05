import React, { Component } from 'react'
import '../styles/ItemsList.css';

export default class ItemsList extends Component {

    handleClick = (event) => {
        const currItemsArray = JSON.parse(localStorage.getItem('items'));
        const currKey = event.target.id;
    
    }  
    


    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(item => {
                        return (
                            <li key={item.id}>{item.text} <button className="delete" id={item.id} onClick={this.handleClick}>delete</button></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


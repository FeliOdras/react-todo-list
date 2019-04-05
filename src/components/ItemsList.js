import React, { Component } from 'react'
import '../styles/ItemsList.css';

export default class ItemsList extends Component {

    handleClick = (event) => {
        console.log('Clicked')
    }  
    


    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(item => {
                        return (
                            <li key={item.id}>{item.text} <button className="delete" onClick={this.handleClick}>delete</button></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


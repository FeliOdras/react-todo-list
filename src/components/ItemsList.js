import React, { Component } from 'react'
import '../styles/ItemsList.css';

export default class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.localStorage = JSON.parse(localStorage.getItem('items'))
    }

    handleDelete = (event) => {
        const itemsList = this.localStorage;
        const itemID = parseInt(event.target.id);
        for (let i = 0; i < itemsList.length; i++) {
            let index = itemsList.indexOf(itemsList[i]);
            if (itemID === itemsList[i].id) {
                itemsList.splice(index, 1);
                localStorage.items = ('items', JSON.stringify(itemsList));
            } else {
                console.log('Keep ' + itemsList.indexOf(itemsList[i]))
            }
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(item => {
                        return (
                            <li key={item.id}>{item.text}<button id={item.id} onClick={this.handleDelete}>Remove</button></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


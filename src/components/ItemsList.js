import React, { Component } from 'react'
import './styles/ItemsList.css';

export default class ItemsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(item => {
                        return (
                            <li key={item.id}>{item.text}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


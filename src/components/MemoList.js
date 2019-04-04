import React, { Component } from 'react'
import '../styles/MemoList.css';
import ItemsList from './ItemsList';

export class MemoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            items: []
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: Date.now(),
            text: this.state.text
        }

        let newItems = this.state.items.concat(newItem);

        this.setState(
            state => ({
                items: newItems,
                text: ''
            })
        )

        localStorage.setItems = ('items', newItems)


    }

    render() {
        return (
            <div className="memo-list" >
                <h4>My plan for today</h4>
                <ItemsList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="ListItem" onChange={this.handleChange} value={this.state.text}></input>
                    <button>Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        )
    }
}

export default MemoList


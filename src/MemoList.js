import React, { Component } from 'react'
import './MemoList.css'
import { timingSafeEqual } from 'crypto';

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
        this.setState(
            state => ({
                items: state.items.concat(newItem),
                text: ''
            })
        )
    }

    render() {
        return (
            <div className="memo-list" >
                <h4>My plan for today</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="ListItem" onChange={this.handleChange} value={this.state.text}></input>
                    <button>Add #{this.state.items.length + 1}</button>
                </form>
            </div>
        )
    }
}

export default MemoList

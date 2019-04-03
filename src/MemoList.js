import React, { Component } from 'react'
import './MemoList.css'

export class MemoList extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div className="memo-list" >
                <h4>My plan for today</h4>
                <form>
                    <input type="text" id="ListItem" onChange={this.handleChange}></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default MemoList


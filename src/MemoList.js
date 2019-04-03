import React from 'react'
import './MemoList.css'

export default function MemoList() {
    return (
        <div className="memo-list">
            <h4>My plan for today</h4>
            <form>
                <input type="text" id="ListItem"></input>
                <button>Add</button>
            </form>
        </div>
    )
}


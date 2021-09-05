import React from 'react'
import CheckBox from './CheckBox'

const AddTodo = () => {
    return (
        <div className="add-todo">
            <CheckBox/>
            <input placeholder="Create a new todo..." type="text" />
        </div>
    )
}

export default AddTodo

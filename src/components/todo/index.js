import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default function Todo(props) {
    return (
        <React.Fragment>
            <h2 className="text-center mt-3 mb-3">My Todo List</h2>
            <TodoInput />
            <TodoList />
        </React.Fragment>
    )
}
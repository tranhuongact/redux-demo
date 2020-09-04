import * as type from './types'

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: type.ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => ({
    type: type.TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: type.DELETE_TODO,
    id
})
import * as type from './types'

export const addTodo = (text) => ({
    type: type.ADD_TODO,
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
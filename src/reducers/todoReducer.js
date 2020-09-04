const initialState = {
    data: [
        {
            id: 0,
            content: 'Hoc redux',
            completed: false
        }
    ]
}

export default function todoReducer(state = [], action) {
    console.log("reducer action: ", action)
    switch (action.type) {
        case 'ADD_TODO':
            return [...state]

        default:
            return state
    }
}
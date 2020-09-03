import React from 'react'

export default function TodoInput(props) {
    return ( 
        <div className="row justify-content-center align-items-center">
            <input type="text" className="form-control col-3 mr-2" />
            <button type="button" class="btn btn-primary">Add</button>
        </div>
    )
}
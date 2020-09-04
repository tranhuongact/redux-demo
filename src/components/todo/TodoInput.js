import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TodoInput(props) {

    const dispatch = useDispatch()

    const [content, setContent] = useState['']

    function handleChange(e) {
        setContent(e.target.value)
    }

    return ( 
        <div className="row justify-content-center align-items-center">
            <input type="text" className="form-control col-3 mr-2" onChange={(e) => handleChange(e)} />
            <button type="button" className="btn btn-primary">Add</button>
        </div>
    )
}
import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const Wrapper = styled.div`
    /* border: 1px solid #ced4da; */
`;

const Option = styled.div`

`;

const TodoContainer = styled.div`

`;

export default function TodoList(props) {
    const todoList = [
        {id: 1, content: 'Learn React', completed: true},
        {id: 2, content: 'Learn Redux', completed: true}
    ];

    return (
        <div className="row justify-content-center align-items-center mt-3">
            <Wrapper className="col-4 p-3">
                <Option className="row justify-content-center align-items-center mb-3">
                    <span>Show: </span>
                    <button type="button" class="btn btn-secondary mr-2 ml-2">All</button>
                    <button type="button" class="btn btn-secondary mr-2">Active</button>
                    <button type="button" class="btn btn-secondary mr-2">Completed</button>
                </Option>
                <TodoContainer>
                    {todoList.map(item => <TodoItem {...item} key={item.id} />)}
                </TodoContainer>
            </Wrapper>
        </div>
    )
}
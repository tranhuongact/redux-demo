import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-size: 18px;
    border-bottom: 1px solid #ced4da;

    .text-line {
        text-decoration: line-through;
    }
`;

const Item = styled.span``;

const TodoAction = styled.div``;

const Action = styled.i``;

export default function TodoItem(props) {
    return (
        <Container className="row p-2">
            <Item className={props.completed ? "text-line col-10" : "col-10"}>{props.content}</Item>
            <TodoAction className="col-2 text-right">
                <Action className={props.completed ? "fa fa-check" : "fa fa-pencil-square-o"} aria-hidden="true" />
                <Action className="ml-3 fa fa-trash-o" aria-hidden="true" />
            </TodoAction>
        </Container>
    )
}
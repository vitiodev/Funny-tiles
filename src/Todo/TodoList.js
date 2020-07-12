import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList({ todos }) {
    const styles = {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '480px'
    }
    return (
        <ul style={styles}>
            {todos.map((todo, i) => {
                return (
                    <TodoItem key={i} todo={todo}/>
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList
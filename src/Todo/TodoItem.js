import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({ todo }) {    

    const { toggleTodo } = useContext(Context)
    const color = todo.hidden ? 'gray' : todo.color
    const className = todo.isCoincidence ? 'hide' : 'tile'

    return (
        <li style={{backgroundColor: `${color}`}} className={className} onClick={() => toggleTodo(todo.id, todo.color)}></li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
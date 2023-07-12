/* exercise 2 */

import * as React from "react"


export default function Todo ({todo, handleUpdateTodo}) {

    // const [completed, setCompleted] = React.useState(false)
    const [editing, setEditing] = React.useState(false)


    const handleCheckboxClick = () => handleUpdateTodo({
        ...todo,
        completed: !todo.completed
      })

    const handleEditClick = () => setEditing(!editing)

    const handleEditTodo = (e) => handleUpdateTodo({
        ...todo,
        label: e.target.value
    })

    return (
        <li>
            <label htmlFor={todo.id}>
                <div>
                    <input
                        type="checkbox"
                        id={todo.id}
                        checked={todo.completed}
                        onChange={handleCheckboxClick}
                    />
                    <span />
                </div>
                {editing === true ? (
                    <input
                        type="text"
                        value={todo.label}
                        onChange={handleEditTodo}
                    />
                    ) : (
                    <span>{todo.label}</span>
                )}
            </label>
            <button onClick={handleEditClick}>
                {editing ? "Save" : "Edit"}
            </button>
        </li>
    )
}
import React, {ChangeEvent, useEffect, useState} from 'react'

type Todo = {
  completed: boolean
  id: number
  title: string
  userId: number
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
          return response.json()
      })
      .then(todos => setTodos(todos))
  }, [])

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(ev.currentTarget.value)
  }

  const filteredTodos = todos.filter(todo => todo.title.includes(filterValue))

  return (
    <div>
      <input type="text" value={filterValue} onChange={handleChange} placeholder="filter" />
      <ul>
        {
          filteredTodos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <label>{todo.title}</label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default React.memo(TodoList)

import React, {useEffect, useState} from 'react'

type Props = {
}

type Todo = {
  completed: boolean
  id: number
  title: string
  userId: number
}

const TodoList = ({}: Props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
          return response.json()
      })
      .then(todos => setTodos(todos))
  }, [])

  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <label>{todo.title}</label>
          </li>
        ))
      }
    </ul>
  )
}

export default React.memo(TodoList)

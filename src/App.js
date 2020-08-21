import React, {
  useMemo,
  useState,
} from 'react'
import Input from './Input'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState([])

  const sortedTodos = useMemo(() => {
    return todos.sort((a, b) => {
      return a.done - b.done
    })
  }, [todos])

  const addTodo = text => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text,
        done: false,
      },
    ])
  }

  return (
    <div
      className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
      <div
        className="bg-white rounded shadow p-6 m-4 w-full lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Built By Cactus Todo</h1>
          <Input create={addTodo}/>
        </div>
        <div>
          {sortedTodos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />)}
        </div>
      </div>
    </div>
  )
}

export default App

'use client'
import React, { useEffect, useState } from 'react';
import { Todointerface } from '../../interfaces/todo_interface';
import { getTodos, deleteTodo } from '../../app';


const del = async (id: number) => {
  try {
    await deleteTodo(id);
    console.log('Todo deleted:', id);
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}



const TodoList = () => {
  const [todos, setTodos] = useState<Todointerface[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData: Todointerface[] = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Head */}
        <thead>
          <tr>
            <th>Number</th>
            <th>My Todos</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todo}</td>
              <td>
                <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => del(todo.id)} className="btn btn-circle btn-outline" aria-label="Delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

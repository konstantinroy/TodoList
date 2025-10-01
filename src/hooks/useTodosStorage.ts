import { useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import type { Todo, TodoId } from '../types'

const LOCAL_STORAGE_KEY = 'todos'

export const SORT_TYPES = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const

export const useTodosStorage = () => {
  const [sortType, setSortType] = useState<string>(SORT_TYPES.ALL)

  // Получение массива задач из локального хранилища
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodosState = localStorage.getItem(LOCAL_STORAGE_KEY)

    return savedTodosState ? JSON.parse(savedTodosState) : []
  })
  
  // Отправление массива задач в локальное хранилище
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // Добавить задачу
  const addTodoHandler = (text: string) => {
    const newTodo = {
      id: uuid(),
      text,
      isCompleted: false,
    }

    setTodos((prevState) => {
      return [...prevState, newTodo]
    })
  }

  // Выполнить задачу
  const toggleTodoHandler = useCallback((id: TodoId) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    )
  }, [])

  // Редактировать задачу
  const editTodoHandler = useCallback((id: TodoId, newText: string) => {
    if (!newText.trim()) {
      alert('Нельзя добавить пустую задачу!')
      return
    }

    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            text: newText,
          }
          : todo,
      ),
    )
  }, [])

  // Удалить задачу
  const deleteTodoHandler = useCallback((id: TodoId) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }, [])

  // Удалить все выполненные задачи
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  // СБрос
  const resetTodosHandler = () => {
    setTodos([])
  }

  return {
    sortType,
    setSortType,
    todos,
    addTodoHandler,
    toggleTodoHandler,
    resetTodosHandler,
    deleteTodoHandler,
    deleteCompletedTodosHandler,
    editTodoHandler,
  }
}

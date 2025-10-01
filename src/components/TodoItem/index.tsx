import { useRef, useState, useEffect } from 'react'
import type { TodoId } from '@/types'

import EditTodoText from './EditTodoText'
import TodoDefaultState from './TodoDefaultState'

import styles from './styles.module.scss'

interface Props {
  id: TodoId
  text: string
  isCompleted: boolean
}

const Todo: React.FC<Props> = ({ id, text, isCompleted }) => {
  const divRef = useRef(null)

  const [isViewText, setIsViewText] = useState<boolean>(false)
  const [editTodoTextOn, setEditTodoTextOn] = useState(false)

  const toggleIsViewTextHandler = () => {
    setIsViewText((prevState) => !prevState)
  }

  useEffect(() => {
    if (divRef.current) {
      divRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <div
        className={`${styles.todo}
      ${isCompleted ? styles.completedTodo : ''}
      ${isViewText ? styles.viewTodoText : ''}
      `}
      >
        {!editTodoTextOn ? (
          <TodoDefaultState
            isCompleted={isCompleted}
            isViewText={isViewText}
            setEditTodoTextOn={setEditTodoTextOn}
            toggleIsViewTextHandler={toggleIsViewTextHandler}
            text={text}
            id={id}
          />
        ) : (
          <EditTodoText
            setEditTodoTextOn={setEditTodoTextOn}
            currentTodoText={text}
            id={id}
          />
        )}
      </div>

      <div ref={divRef} />
    </>
  )
}

export default Todo

import { useTodos } from '@/hooks/useTodos'

import styles from './styles.module.scss'
import { SORT_TYPES } from '@/hooks/useTodosStorage'
import { useMemo } from 'react'

const TodoCountText = () => {
  const { sortType, todos } = useTodos()

  const activeTodosCount = useMemo(() => {
    return todos.filter((todo) => !todo.isCompleted).length
  }, [todos])

  const completedTodosCount = useMemo(() => {
    return todos.filter((todo) => todo.isCompleted).length
  }, [todos])

  if (
    activeTodosCount &&
    (sortType === SORT_TYPES.ALL || sortType === SORT_TYPES.ACTIVE)
  ) {
    return (
      <h2
        className={styles.todoCountText}
      >{`У вас ${activeTodosCount} активных задач`}</h2>
    )
  }

  if (completedTodosCount && sortType === SORT_TYPES.COMPLETED) {
    return (
      <h2
        className={styles.todoCountText}
      >{`У вас ${completedTodosCount} выполненных задач`}</h2>
    )
  }
}

export default TodoCountText

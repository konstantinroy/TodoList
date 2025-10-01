import { useTodos } from '@/hooks/useTodos'
import { SORT_TYPES } from '@/hooks/useTodosStorage'

import './styles.module.scss'

const TodoSort = () => {
  const { setSortType } = useTodos()

  const viewAllTodos = () => {
    setSortType(SORT_TYPES.ALL)
  }
  const viewActiveTodos = () => {
    setSortType(SORT_TYPES.ACTIVE)
  }
  const viewCompletedTodos = () => {
    setSortType(SORT_TYPES.COMPLETED)
  }

  return (
    <select name="sort">
      <option onClick={viewAllTodos} value="all">
        Все
      </option>
      <option onClick={viewActiveTodos} value="active">
        Активные
      </option>
      <option onClick={viewCompletedTodos} value="completed">
        Выполненные
      </option>
    </select>
  )
}

export default TodoSort

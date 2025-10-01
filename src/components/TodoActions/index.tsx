import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from './UI/Button'
import { useTodos } from '@/hooks/useTodos'
import TodoSort from './TodoSort/index'

import styles from './styles.module.scss'

const TodosActions = () => {
  const { resetTodosHandler, deleteCompletedTodosHandler, todos } = useTodos()

  if (todos.length === 0) {
    return null
  }

  return (
    <div className={styles.todoActions}>
      <div className={styles.todoSort}>
        <TodoSort />
      </div>
      <div className={styles.actionsBtns}>
        <Button
          className={styles.refreshBtn}
          title="Удалить все"
          onClick={resetTodosHandler}
        >
          <RiRefreshLine className={styles.refreshIcon} />
        </Button>

        <Button
          className={styles.deleteTodoBtn}
          title="Удалить выполненные задачи"
          onClick={deleteCompletedTodosHandler}
        >
          <RiDeleteBin2Line />
        </Button>
      </div>
    </div>
  )
}

export default TodosActions

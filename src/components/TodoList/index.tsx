import { useTodos } from '@/hooks/useTodos'
import TodoItem from '@components/TodoItem'
import { SORT_TYPES } from '@/hooks/useTodosStorage'
import { type Todo } from '@/types'

import styles from './styles.module.scss'

const TodoList: React.FC = () => {
  const { todos, sortType } = useTodos()

  return (
    <div>
      {todos.length === 0 && (
        <h2 className={styles.emptyTodoAlarm}>Список задач пуст</h2>
      )}

      <div className={styles.todoList}>
        {sortType === SORT_TYPES.ALL &&
          todos.map((todo: Todo) => (
            <TodoItem
              key={todo.id as string}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.isCompleted}
            />
          ))}

        {sortType === SORT_TYPES.ACTIVE &&
          todos
            .filter((todo) => !todo.isCompleted)
            .map((todo: Todo) => (
              <TodoItem
                key={todo.id as string}
                id={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
              />
            ))}

        {sortType === SORT_TYPES.COMPLETED &&
          todos
            .filter((todo) => todo.isCompleted)
            .map((todo: Todo) => (
              <TodoItem
                key={todo.id as string}
                id={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
              />
            ))}
            
      </div>
    </div>
  )
}

export default TodoList

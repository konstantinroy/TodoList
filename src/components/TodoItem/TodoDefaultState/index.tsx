import { RiTodoFill } from 'react-icons/ri';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

import styles from './styles.module.scss';
import { useTodos } from '@/hooks/useTodos';
import type { Dispatch, SetStateAction } from 'react';
import type { TodoId } from '@/types';

interface Props {
  isCompleted: boolean;
  isViewText: boolean;
  setEditTodoTextOn: Dispatch<SetStateAction<boolean>>;
  toggleIsViewTextHandler(): void;
  text: string;
  id: TodoId;
}

const TodoDefaultState: React.FC<Props> = ({
  isCompleted,
  isViewText,
  setEditTodoTextOn,
  toggleIsViewTextHandler,
  text,
  id,
}) => {
  const { toggleTodoHandler, deleteTodoHandler } = useTodos();

  const editTodoTextHandler = () => {
    if (!isCompleted) {
      setEditTodoTextOn((prevState) => !prevState);
    }
  };

  return (
    <div
      className={`${styles.todoBlock}
      ${isCompleted ? styles.completedTodo : ''}
      ${isViewText ? styles.viewTodoText : ''}
      `}
    >
      {!isViewText && (
        <div className={styles.todoBox}>
          <RiTodoFill
            className={styles.todoIcon}
            onClick={editTodoTextHandler}
            title="Редактировать задачу"
          />
        </div>
      )}

      <div className={styles.todoBox}>
        <div
          className={`${styles.textBlock}
${isViewText ? styles.visTextBlock : ''}
        `}
          onClick={toggleIsViewTextHandler}
        >
          <p>{text}</p>
        </div>
      </div>

      {!isViewText && (
        <div className={styles.todoBoxIcons}>
          <RiDeleteBin2Line
            className={styles.deleteIcon}
            onClick={() => deleteTodoHandler(id)}
            title="Удалить задачу"
          />

          {isCompleted ? (
            <VscChromeClose
              className={styles.XIcon}
              onClick={() => {
                toggleTodoHandler(id);
              }}
              title="Отменить"
            />
          ) : (
            <BsCheckLg
              className={styles.checkIcon}
              onClick={() => {
                toggleTodoHandler(id);
              }}
              title="Выполнить задачу"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TodoDefaultState;

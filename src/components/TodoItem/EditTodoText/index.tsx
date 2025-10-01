import {
  type FormEvent,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

import type { TodoId } from '@/types';

import styles from './styles.module.scss';
import { useTodos } from '@/hooks/useTodos';

interface Props {
  currentTodoText: string
  setEditTodoTextOn: Dispatch<SetStateAction<boolean>>
  id: TodoId
}

const EditTodoText: React.FC<Props> = ({
  setEditTodoTextOn,
  id,
  currentTodoText,
}) => {
  const { editTodoHandler } = useTodos();

  const [newTodoText, setNewTodoText] = useState<string>(currentTodoText);

  const handleTodoTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.todoInput}>
      <div className={styles.inputBox}>
        <form className={styles.todoForm} onSubmit={onSubmitHandler}></form>
        <input
          type="text"
          value={newTodoText}
          onChange={handleTodoTextChange}
          placeholder="Редактировать задачу"
        />
      </div>

      <div className={styles.editTodoIcons}>
        <div className={styles.editTodoIconsBox}>
          <VscChromeClose
            className={styles.XIcon}
            onClick={() => setEditTodoTextOn((prevState) => !prevState)}
            title="Отменить"
          />
          <BsCheckLg
            className={styles.checkIcon}
            onClick={() => {
              setEditTodoTextOn((prevState) => !prevState);
              editTodoHandler(id, newTodoText);
            }}
            title="Сохранить"
          />
        </div>
      </div>
    </div>
  );
};

export default EditTodoText;

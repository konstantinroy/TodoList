import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useTodos } from '@/hooks/useTodos';

import styles from './styles.module.scss';

function TodoForm() {
  const { addTodoHandler } = useTodos();

  const [text, setText] = useState<string>('');

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!text.trim()) {
      alert('Нельзя добавить пустую задачу!');
      return;
    }

    addTodoHandler(text);
    setText('');
  };

  const handleTodoTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.todoFormBlock}>
      <form className={styles.todoForm} onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={text}
          onChange={handleTodoTextChange}
          placeholder="Добавить задачу"
        />

        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default TodoForm;

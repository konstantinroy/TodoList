import { createContext } from 'react';
import { useTodosStorage } from '@/hooks/useTodosStorage';

const TodoContext = createContext<ReturnType<typeof useTodosStorage> | null>(
  null,
);

const TodoProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const todosState = useTodosStorage();

  return (
    <TodoContext.Provider value={todosState}>{children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

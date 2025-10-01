import { useContext } from 'react';
import { TodoContext } from '@components/TodoProvider';

export const useTodos = () => {
  const ctx = useContext(TodoContext);

  if (!ctx) throw new Error('useTodos must be used inside TodosProvider');

  return ctx;
};

import TodoForm from '@components/TodoForm';
import TodoList from '@components/TodoList';
import TodoActions from '@components/TodoActions';
import TodoCountText from '../TodoCountText';

import './styles.scss';

const App = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoForm />

      <TodoActions />

      <TodoList />

      <TodoCountText />

    </div>
  );
};

export default App;

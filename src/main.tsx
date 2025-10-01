import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@components/App';
import { TodoProvider } from '@components/TodoProvider';

import '@/assets/styles/reset.scss';
import '@/assets/styles/globals.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
);

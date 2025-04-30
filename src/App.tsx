import './App.css';

import { FC, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { routes } from '@/routes';

const router = createBrowserRouter(routes);

const App: FC = () => {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
};

export default App;

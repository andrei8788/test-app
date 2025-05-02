import './styles/globals.scss';

import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const router = createBrowserRouter(routes);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import Layout from '@/components/Layout';
import NotFound from '@/components/NotFound';
import { ECocktailType } from '@/enums/cocktail.enums';
import Cocktails from '@/modules/cocktails/pages/Cocktails';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${ECocktailType.Margarita}`} replace />,
      },
      {
        path: '/:id',
        element: <Cocktails />,
      },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

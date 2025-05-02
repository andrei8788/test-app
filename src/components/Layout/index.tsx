import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar';
import style from './layout.module.scss';

const Layout: FC = () => {
  return (
    <main className={style.root}>
      <Sidebar />
      <section className={style.content}>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;

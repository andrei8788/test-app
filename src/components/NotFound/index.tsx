import { FC } from 'react';

import style from './notFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404</h1>
    </div>
  );
};

export default NotFound;

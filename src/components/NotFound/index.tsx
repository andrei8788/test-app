import { FC } from 'react';

import SadSmileyImg from '@/assets/images/sad-smiley.png';

import style from './notFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={SadSmileyImg} alt="Smiley" className={style.smiley} />
        <h1 className={style.title}>404</h1>
        <h2 className={style.subtitle}>Page not found</h2>
      </div>
    </div>
  );
};

export default NotFound;

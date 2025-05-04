import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ECocktailType } from '@/enums/cocktail.enums';
import { capitalizeFirstLetter } from '@/utils/string.utils';

import style from './sidebar.module.scss';

const Sidebar: FC = () => {
  const cocktailList = Object.values(ECocktailType);

  return (
    <aside className={style.aside}>
      <ul>
        {cocktailList.map((item) => {
          return (
            <li key={item}>
              <NavLink className={(navData) => (navData.isActive ? style.active : '')} to={item}>
                {capitalizeFirstLetter(item)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Loader from '@/components/Loader';
import { ECocktailCode } from '@/enums/cocktail.enums';

import { useGetCocktailsQuery } from '../cocktails.api';
import style from './cocktails.module.scss';
import Cocktail from './components/Cocktail';

const Cocktails: FC = () => {
  const { id } = useParams<{ id: ECocktailCode }>();

  const { data, isFetching } = useGetCocktailsQuery({ s: id as ECocktailCode }, { skip: !id });

  if (!id || !Object.values(ECocktailCode).includes(id)) {
    return <Navigate to="/404" replace />;
  }

  if (isFetching) {
    return (
      <div className={style.loader}>
        <Loader />
      </div>
    );
  }

  const cocktails = data?.drinks ?? [];

  return (
    <div className={style.cocktails}>
      {cocktails.map((item) => {
        return <Cocktail key={item.idDrink} {...item} />;
      })}
    </div>
  );
};

export default Cocktails;

import { FC } from 'react';

import { TCocktail } from '../../../cocktails.types';
import style from './cocktail.module.scss';

type CocktailProps = TCocktail;

const Cocktail: FC<CocktailProps> = ({
  strDrinkThumb,
  strDrink,
  strCategory,
  strAlcoholic,
  strGlass,
  strInstructions,
  ...rest
}) => {
  const ingredients = Array.from({ length: 15 }, (_, i) => i + 1).map((number) => {
    const ingredient = rest[`strIngredient${number}` as keyof typeof rest];
    return ingredient ? (
      <li key={number}>
        <h3 className={style.description}>{ingredient}</h3>
      </li>
    ) : null;
  });
  return (
    <article className={style.cocktail}>
      <div>
        <h2 className={style.title}>{strDrink}</h2>
        <h3 className={style.description}>{strCategory}</h3>
        <h3 className={style.description}>{strAlcoholic}</h3>
        <h3 className={style.description}>{strGlass}</h3>
        <h2 className={style.subtitle}>Instructions:</h2>
        <h3 className={style.description}>{strInstructions}</h3>
        <h2 className={style.subtitle}>List of ingredients:</h2>
        <ul>{ingredients}</ul>
      </div>
      <div>
        <img src={`${strDrinkThumb}/medium`} alt={strDrink} className={style.thumb} loading={'lazy'} />
      </div>
    </article>
  );
};

export default Cocktail;

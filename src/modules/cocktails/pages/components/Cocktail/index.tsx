import { FC } from 'react';

import { TCocktail } from '../../../cocktails.types';
import { generationOfIngredientProperties } from '../../../coctails.utils';
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
  const ingredients = generationOfIngredientProperties().map((item) => {
    const ingredient = rest[item as keyof typeof rest];
    return ingredient ? (
      <li key={item}>
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

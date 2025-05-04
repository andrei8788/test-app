import { render, screen } from '@testing-library/react';

import { cocktailMock } from '@/tests/__mocks__/cocktail.mock';

import { generationOfIngredientProperties } from '../../../coctails.utils';
import Cocktail from './';

describe('Cocktail component', () => {
  it('It is displayed with the listed ingredients', () => {
    render(<Cocktail {...cocktailMock} />);

    const properties = generationOfIngredientProperties().filter((item) => Boolean(cocktailMock[item]));

    properties.forEach((item) => {
      expect(screen.getByText(cocktailMock[item])).toBeInTheDocument();
    });
  });
});

import { capitalizeFirstLetter } from './string.utils';

describe('capitalizeFirstLetter util', () => {
  it('The first letter must be capitalized', () => {
    const testValue = 'string';
    const expectedValue = 'String';

    const value = capitalizeFirstLetter(testValue);

    expect(expectedValue).toEqual(value);
  });
});

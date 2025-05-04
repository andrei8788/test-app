export const generationOfIngredientProperties = (count = 15) => {
  return Array.from({ length: count }, (_, i) => i + 1).map((number) => {
    return `strIngredient${number}`;
  });
};

export const generationOfIngredientProperties = (): string[] => {
  return Array.from({ length: 15 }, (_, i) => i + 1).map((number) => {
    return `strIngredient${number}`;
  });
};

const getFoodByIngredient = async (term) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`,
  );
  const { meals } = await response.json();
  return meals;
};

const getFoodByName = async (term) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`,
  );
  const { meals } = await response.json();
  return meals;
};

const getFoodByFirstLetter = async (term) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`,
  );
  const { meals } = await response.json();
  return meals;
};

export const getFoodByFilter = async (term) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`,
  );
  const { meals } = await response.json();
  return meals;
};

export const getFood = (term, type) => {
  switch (type) {
  case 'Primeira Letra':
    return getFoodByFirstLetter(term);
  case 'Nome':
    return getFoodByName(term);
  case 'Ingrediente':
    return getFoodByIngredient(term);
  default:
    return null;
  }
};

export const foodID = async (id) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await request.json();
  return response;
};

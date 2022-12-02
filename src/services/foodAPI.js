export const foodID = async (id) => {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await request.json();
    return response;
  };
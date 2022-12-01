import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { getDrink } from '../helpers/drinkApi';
import { getFood } from '../helpers/foodApi';

function SearchBar() {
  const [search, setSearch] = useState({
    searchTerm: '',
    searchType: '',
  });
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const history = useHistory();
  function handleChange({ target: { value, id } }) {
    setSearch({ ...search, [id]: value });
  }

  function handleRedirect() {
    if (recipes && recipes.length === 1) {
      console.log('receita unica', recipes[0]);
      console.log(history);
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (search.searchType === 'First letter' && search.searchTerm.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return null;
    }
    if (location.pathname === '/drinks') {
      try {
        const drinks = await getDrink(search.searchTerm, search.searchType);
        console.log(
          `Resultados para ${search.searchTerm} e ${search.searchType}`,
          drinks,
        );
        setRecipes(drinks);
        setError(false);
      } catch (e) {
        setError(true);
      }
    }
    if (location.pathname === '/meals') {
      try {
        const meals = await getFood(search.searchTerm, search.searchType);
        console.log(
          `Resultados para ${search.searchTerm} e ${search.searchType}`,
          meals,
        );
        setRecipes(meals);
        setError(false);
      } catch (e) {
        setError(true);
      } finally {
        handleRedirect();
      }
    }
  }

  return (
    <form className="search-bar" onSubmit={ handleSubmit }>
      <input
        type="text"
        className="mb-2"
        label="searchTerm"
        id="searchTerm"
        placeholder="Buscar Receita"
        data-testid="search-input"
        value={ search.searchTerm }
        onChange={ handleChange }
      />
      {error && <h2>Não encontramos nenhuma receita</h2>}
      {recipes.map((e, i) => <p key={ i }>{e.srtMeal}</p>)}
      <div className="inline-radios mx-auto">
        <label htmlFor="searchType">
          Ingredient
          <input
            data-testid="ingredient-search-radio"
            label="Ingredient"
            id="searchType"
            name="group1"
            type="radio"
            value="Ingredient"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="searchType">
          Name
          <input
            data-testid="name-search-radio"
            label="Name"
            id="searchType"
            name="group1"
            type="radio"
            value="Name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="searchType">
          First letter
          <input
            data-testid="first-letter-search-radio"
            label="First letter"
            id="searchType"
            name="group1"
            type="radio"
            value="First letter"
            onChange={ handleChange }
          />
        </label>
      </div>
      <Button
        type="submit"
        className="mt-2"
        variant="primary"
        data-testid="exec-search-btn"
      >
        Buscar
      </Button>
    </form>
  );
}

SearchBar.propTypes = {}.isRequired;
export default SearchBar;

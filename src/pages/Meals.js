import useMeals from '../hooks/useMeals';

import Header from '../components/Header';

const SIZE = 12;

function Meals() {
  const { data, loading } = useMeals();

  if (loading) return 'Loading...';

  return (
    <>
      <Header search title="Meals" />
      {
        data.slice(0, SIZE).map((meal, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ meal.idMeal }>
            <img
              data-testid={ `${i}-card-img` }
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
            />
            <span data-testid={ `${i}-card-name` }>{ meal.strMeal }</span>
          </div>
        ))
      }
    </>
  );
}

export default Meals;

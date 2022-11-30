import useDrinks from '../hooks/useDrinks';

import Header from '../components/Header';

const SIZE = 12;

function Drinks() {
  const { data, loading } = useDrinks();

  if (loading) return 'Loading...';

  return (
    <>
      <Header search title="Drinks" />
      {
        data.slice(0, SIZE).map((drink, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ drink.idDrink }>
            <img
              data-testid={ `${i}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
            />
            <span data-testid={ `${i}-card-name` }>{ drink.strDrink }</span>
          </div>
        ))
      }
    </>
  );
}

export default Drinks;

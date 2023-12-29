import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/Recommendations.css';

function Recommendations({ recommendations }) {
  const location = useLocation();

  let name = 'strDrink';
  let thumb = 'strDrinkThumb';

  if (location.pathname.includes('drinks')) {
    name = 'strMeal';
    thumb = 'strMealThumb';
  }
  return (
    <div className="recommendation-container">
      <h5 className="recommendation-title">Recommendations :</h5>
      <div className="slider">
        { recommendations?.map((recommendation, index) => (
          <div
            className="slides"
            key={ `recommendation-${index}` }
            data-testid={ `${index}-recommendation-card` }
          >
            <h4 data-testid={ `${index}-recommendation-title` }>
              { recommendation[name] }
            </h4>
            <img
              className="recommendationImg"
              src={ recommendation[thumb] }
              alt={ recommendation[name] }
            />
          </div>
        )) }
      </div>
    </div>
  );
}

Recommendations.propTypes = {}.isRequired;

export default Recommendations;

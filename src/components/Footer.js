import React from 'react';
import { useHistory } from 'react-router-dom';
import meals from '../images/mealIcon.svg';
import drinks from '../images/drinkIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();

  const drinkPage = () => {
    history.push('/drinks');
  };

  const mealPage = () => {
    history.push('/meals');
  };

  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <button
        type="button"
        onClick={ drinkPage }
        data-testid="drinks-bottom-btn"
        src={ drinks }
      >
        <img src={ drinks } alt="drinks" />
      </button>
      <button
        type="button"
        onClick={ mealPage }
        data-testid="meals-bottom-btn"
        src={ meals }
      >
        <img src={ meals } alt="meals" />
      </button>
    </footer>
  );
}

export default Footer;
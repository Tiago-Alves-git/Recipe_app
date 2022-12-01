import PropTypes from 'prop-types';

import IconMeal from '../images/mealIcon.svg';
import IconDrink from '../images/drinkIcon.svg';
import IconBlackHeart from '../images/blackHeartIcon.svg';
import IconProfile from '../images/profileIcon.svg';

function PageIcon(props) {
  const { title } = props;

  const getIcon = () => {
    const lowerCaseTitle = title.toLowerCase();

    if (lowerCaseTitle === 'meals') return IconMeal;
    if (lowerCaseTitle === 'drinks') return IconDrink;
    if (lowerCaseTitle === 'profile') return IconProfile;
    if (lowerCaseTitle === 'favorites') return IconBlackHeart;
    return '';
  };

  return <img src={ getIcon() } alt={ title } />;
}

PageIcon.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageIcon;

import PropTypes from 'prop-types';

import { ReactComponent as IconMeal } from '../images/mealIcon.svg';
import { ReactComponent as IconDrink } from '../images/drinkIcon.svg';
import { ReactComponent as IconBlackHeart } from '../images/blackHeartIcon.svg';
import { ReactComponent as IconProfile } from '../images/profileIcon.svg';

function PageIcon(props) {
  const { title } = props;

  if (title === 'meals') return <IconMeal />;
  if (title === 'drinks') return <IconDrink />;
  if (title === 'profile') return <IconProfile />;
  if (title === 'favorites') return <IconBlackHeart />;

  return <div />;
}

PageIcon.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageIcon;

import PropTypes from 'prop-types';

import PageIcon from './PageIcon';
import IconProfile from '../images/profileIcon.svg';
import IconSearch from '../images/searchIcon.svg';

function Header(props) {
  const { search, title } = props;

  return (
    <header>
      <nav>
        <span>
          recipes
          <b>app</b>
        </span>
        {
          search
            && <img src={ IconSearch } alt="search" data-testid="search-top-btn" />
        }
        <img src={ IconProfile } alt="profile" data-testid="profile-top-btn" />
      </nav>
      <div>
        <PageIcon title={ title } />
        <span data-testid="page-title">{ title }</span>
      </div>
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  search: false,
};

export default Header;

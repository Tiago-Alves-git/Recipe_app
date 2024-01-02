import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const history = useHistory();

  const user = localStorage.getItem('user');

  const { email } = user ? JSON.parse(user) : { email: '' };

  const doneRecipes = () => {
    history.push('/done-recipes');
  };

  const favoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      <p data-testid="profile-email">{ email }</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ doneRecipes }
        className="category-btn"
      >
        Done Recipes

      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ favoriteRecipes }
        className="category-btn"
      >
        Favorite Recipes

      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logout }
        className="category-btn"
      >
        Logout

      </button>
      <Footer />
    </div>
  );
}

export default Profile;

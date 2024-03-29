import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/profile" component={ Profile } />

      <Route exact path="/drinks" component={ Recipes } />
      <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
      <Route path="/drinks/:id" component={ RecipeDetails } />

      <Route exact path="/meals" component={ Recipes } />
      <Route path="/meals/:id/in-progress" component={ RecipeInProgress } />
      <Route path="/meals/:id" component={ RecipeDetails } />

      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Drink from './pages/Drink';
import Login from './pages/Login';
import Meal from './pages/Meal';
import Profile from './pages/Profile';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/profile" component={ Profile } />

      <Route exact path="/drinks" component={ Recipes } />
      <Route path="/drinks/:id/in-progress?" component={ Drink } />

      <Route exact path="/meals" component={ Recipes } />
      <Route path="/meals/:id/in-progress?" component={ Meal } />

      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;

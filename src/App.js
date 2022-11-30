import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Meals from './pages/Meals';
import Meal from './pages/Meal';
import Drinks from './pages/Drinks';
import Drink from './pages/Drink';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DoneRecipes from './pages/DoneRecipes';

import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/profile" component={ Profile } />

          <Route exact path="/drinks" component={ Drinks } />
          <Route path="/drinks/:id/in-progress?" component={ Drink } />

          <Route exact path="/meals" component={ Meals } />
          <Route path="/meals/:id/in-progress?" component={ Meal } />

          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/search" component={ SearchBar } />
      <Route path="/comidas" component={ Foods } />
      <Route path="/bebidas" component={ Drinks } />
    </Switch>
  );
}

export default App;

import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export default class Drinks extends Component {
  render() {
    return (
      <div>
        <h1>Drinks</h1>
        <SearchBar path="drinks" />
      </div>
    );
  }
}

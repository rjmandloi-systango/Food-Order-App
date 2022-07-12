import React from 'react';
import Header from './components/Layout/Header';
// import MealsSummary from './components/Meals/MealsSummary';
// import AvailableMeals from './components/Meals/AvailableMeals';

import './App.css';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Meals></Meals>
    </React.Fragment>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dinnersData from '../assets/dinners.json';

const Picker = (props) => {
  const [dinners, setDinners] = useState(dinnersData);
  const [chosenDinner, setChosenDinner] = useState('');

  useEffect(() => {
    const entries = Object.entries(dinners);
    const randomIndex = Math.floor(Math.random() * entries.length);
    const randomDinner = entries[randomIndex][0];
    setChosenDinner(randomDinner);
  }, [dinners]);

  const handleClick = () => {
    const dinnerKeys = Object.keys(dinners);
    const randomIndex = Math.floor(Math.random() * dinnerKeys.length);
    const randomDinner = dinnerKeys[randomIndex];
    setChosenDinner(randomDinner);
  };

  const capitalize = (str) => {
    if (typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return ''; // Return an empty string or a default value for objects
  };

  const dinnerInfo = dinners[chosenDinner] || [];
  const capitalizedDinner = capitalize(chosenDinner);
  const capitalizedCuisine = capitalize(dinnerInfo[1]);
  const capitalizedRecipeType = capitalize(dinnerInfo[0]);
  const capitalizedMainProtein = capitalize(dinnerInfo[2]);
  const capitalizedIngredients = dinnerInfo.slice(3).map((ingredient) => capitalize(ingredient));

  return (
    <div>
      <button onClick={handleClick}>Select random item</button>
      <h1>Your Dinner: {capitalizedDinner}</h1>
      <p>
        <strong>Cuisine:</strong> {capitalizedCuisine}
      </p>
      <p>
        <strong>Recipe type:</strong> {capitalizedRecipeType}
      </p>
      <p>
        <strong>Main Protein:</strong> {capitalizedMainProtein}
      </p>
      <p>
        <strong>Other Key Ingredients:</strong>
      </p>
      <ul>
        {capitalizedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Picker;

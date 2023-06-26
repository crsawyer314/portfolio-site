import React, { useState, useEffect } from 'react';
import dinnersData from '../assets/dinners.json';

const DinnerSpinner = ({ collapsed }) => {
  const [dinners] = useState(dinnersData);
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
      <div id="main" className={collapsed ? "collapsed" : "expanded"}>
        <div className="inner">

          {/* <!-- Header --> */}
          <header id="header">
            <a href="index.html" className="logo"><strong>Catherine Sawyer</strong></a>
            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
              <li><a href="https://github.com/crsawyer314" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </header>

          {/* <!-- Content --> */}
          <section>
            <header className="main">
              <h1>Dinner Spinner</h1>
            </header>

            <p>The following is a fun little project I made to help choose what's for dinner. Hope it helps you too!</p>

            <hr className="major" />

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

          </section>

        </div>
      </div>
    </div>
  );
}

export default DinnerSpinner;

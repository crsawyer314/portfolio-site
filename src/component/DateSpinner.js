import React, { useState, useEffect } from 'react';
import dateIdeasData from '../assets/dateIdeas.json';

const DateIdeaSpinner = ({ collapsed }) => {
  const [dateIdeas] = useState(dateIdeasData);
  const [chosenDateIdea, setChosenDateIdea] = useState('');
  const [selectedCostFilters, setSelectedCostFilters] = useState([]);

  useEffect(() => {
    const dateIdeaKeys = Object.keys(dateIdeas);
    const filteredDateIdeaKeys = filterDateIdeasByCost(dateIdeaKeys);
    const randomIndex = Math.floor(Math.random() * filteredDateIdeaKeys.length);
    const randomDateIdea = filteredDateIdeaKeys[randomIndex];
    setChosenDateIdea(randomDateIdea);
  }, [dateIdeas, selectedCostFilters]);

  const handleClick = () => {
    const dateIdeaKeys = Object.keys(dateIdeas);
    const filteredDateIdeaKeys = filterDateIdeasByCost(dateIdeaKeys);
    const randomIndex = Math.floor(Math.random() * filteredDateIdeaKeys.length);
    const randomDateIdea = filteredDateIdeaKeys[randomIndex];
    setChosenDateIdea(randomDateIdea);
  };

  const capitalize = (str) => {
    if (typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return ''; // Return an empty string or a default value for objects
  };

  const filterDateIdeasByCost = (dateIdeaKeys) => {
    if (selectedCostFilters.length === 0 || selectedCostFilters.length === 3) {
      return dateIdeaKeys;
    } else {
      return dateIdeaKeys.filter((key) => selectedCostFilters.includes(dateIdeas[key][1]));
    }
  };

  const handleCostFilterClick = (cost) => {
    let updatedCostFilters = [...selectedCostFilters];
    if (updatedCostFilters.includes(cost)) {
      updatedCostFilters = updatedCostFilters.filter((filter) => filter !== cost);
    } else {
      updatedCostFilters.push(cost);
    }
    setSelectedCostFilters(updatedCostFilters);
  };

  const dateIdeaInfo = dateIdeas[chosenDateIdea] || [];
  const capitalizedDateIdea = capitalize(chosenDateIdea);
  const location = dateIdeaInfo[0];
  const cost = dateIdeaInfo[1];

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
              <h1>Date Idea Spinner</h1>
            </header>

            <div>
              <div>
                <h3>Filter by Cost:</h3>
                <button
                    className={selectedCostFilters.includes('$') ? 'active' : ''}
                    onClick={() => handleCostFilterClick('$')}
                >
                    $
                </button>
                <button
                    className={selectedCostFilters.includes('$$') ? 'active' : ''}
                    onClick={() => handleCostFilterClick('$$')}
                >
                    $$
                </button>
                <button
                    className={selectedCostFilters.includes('$$$') ? 'active' : ''}
                    onClick={() => handleCostFilterClick('$$$')}
                >
                    $$$
                </button>
              </div>
              <button onClick={handleClick}>Select random item</button>
              
              <h1>Your Date Idea: {capitalizedDateIdea}</h1>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Cost:</strong> {cost}
              </p>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}

export default DateIdeaSpinner;

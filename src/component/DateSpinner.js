import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import dateIdeasData from '../assets/dateIdeas.json';

const DateIdeaSpinner = ({ collapsed }) => {
    const [dateIdeas] = useState(dateIdeasData);
    const [chosenDateIdea, setChosenDateIdea] = useState('');
    const [selectedCostFilters, setSelectedCostFilters] = useState([]);
    const [selectedLocationFilters, setSelectedLocationFilters] = useState([]);
    const [filteredDateIdeas, setFilteredDateIdeas] = useState([]);
    const [showAllMatching, setShowAllMatching] = useState(false);
  
    useEffect(() => {
      const dateIdeaKeys = Object.keys(dateIdeas);
      const filteredDateIdeaKeys = filterDateIdeasByCostAndLocation(dateIdeaKeys);
      setFilteredDateIdeas(filteredDateIdeaKeys);
  
      const randomIndex = Math.floor(Math.random() * filteredDateIdeaKeys.length);
      const randomDateIdea = filteredDateIdeaKeys[randomIndex];
      setChosenDateIdea(randomDateIdea);
    }, [dateIdeas, selectedCostFilters, selectedLocationFilters]);
  
    const handleClick = () => {
      setShowAllMatching(false);
      const dateIdeaKeys = Object.keys(dateIdeas);
      const filteredDateIdeaKeys = filterDateIdeasByCostAndLocation(dateIdeaKeys);
      setFilteredDateIdeas(filteredDateIdeaKeys);
  
      const randomIndex = Math.floor(Math.random() * filteredDateIdeaKeys.length);
      const randomDateIdea = filteredDateIdeaKeys[randomIndex];
      setChosenDateIdea(randomDateIdea);
    };
  
    const handleShowAllMatching = () => {
      setShowAllMatching(true);
    };
  
    const capitalize = (str) => {
      if (typeof str === 'string') {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      return ''; // Return an empty string or a default value for objects
    };
  
    const filterDateIdeasByCostAndLocation = (dateIdeaKeys) => {
      if (
        (selectedCostFilters.length === 0 || selectedCostFilters.length === 3) &&
        (selectedLocationFilters.length === 0 || selectedLocationFilters.length === 2)
      ) {
        return dateIdeaKeys;
      } else {
        return dateIdeaKeys.filter(
          (key) =>
            (selectedCostFilters.length === 0 || selectedCostFilters.includes(dateIdeas[key][1])) &&
            (selectedLocationFilters.length === 0 || selectedLocationFilters.includes(dateIdeas[key][0]))
        );
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
  
    const handleLocationFilterClick = (location) => {
      let updatedLocationFilters = [...selectedLocationFilters];
      if (updatedLocationFilters.includes(location)) {
        updatedLocationFilters = updatedLocationFilters.filter((filter) => filter !== location);
      } else {
        updatedLocationFilters.push(location);
      }
      setSelectedLocationFilters(updatedLocationFilters);
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Filter by Cost:  </h3>
                <button
                    title="$0-$10"
                    className={selectedCostFilters.includes('$') ? 'active' : ''}
                    onClick={() => handleCostFilterClick('$')}
                    style={{ marginRight: '0.5em', marginLeft: '0.5em' }}
                >
                    $
                </button>
                <button
                    title="$10-$25"
                    className={selectedCostFilters.includes('$$') ? 'active' : ''}
                    onClick={() => handleCostFilterClick('$$')}
                    style={{ marginRight: '0.5em' }}
                >
                    $$
                </button>
                <button
                    title="$25-$50"
                    className={selectedCostFilters.includes('$$$') ? 'active' : ''}
                    onClick={() => handleCostFilterClick('$$$')}
                    style={{ marginRight: '0.5em' }}
                >
                    $$$
                </button>

                <h3 style={{ marginRight: '0.5em', marginLeft: '0.5em' }}>Filter by Location:</h3>
                <button
                    className={selectedLocationFilters.includes('At home') ? 'active' : ''}
                    onClick={() => handleLocationFilterClick('At home')}
                    style={{ marginRight: '0.5em', marginLeft: '0.5em' }}
                >
                    At Home
                </button>
                <button
                    className={selectedLocationFilters.includes('Out') ? 'active' : ''}
                    onClick={() => handleLocationFilterClick('Out')}
                    style={{ marginRight: '0.5em' }}
                >
                    Out
                </button>

              </div>

              <br />
              <button onClick={handleClick} className={!showAllMatching ? 'active' : ''}>
                Select random item
              </button>
              <button 
                onClick={handleShowAllMatching} 
                className={showAllMatching ? 'active' : ''}
                style={{ marginLeft: '0.5em' }}
              >
                Show All Matching
              </button>
              <br />
              <br />
              
              {showAllMatching ? (
            <Grid container spacing={2}>
              {filteredDateIdeas.map((key) => {
                const dateIdeaInfo = dateIdeas[key];
                const capitalizedDateIdea = capitalize(key);
                const location = dateIdeaInfo[0];
                const cost = dateIdeaInfo[1];

                return (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {capitalizedDateIdea}
                        </Typography>
                        <Typography color="textSecondary">
                          <strong>Location:</strong> {location}
                        </Typography>
                        <Typography color="textSecondary">
                          <strong>Cost:</strong> {cost}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {capitalizedDateIdea}
                </Typography>
                <Typography color="textSecondary">
                  <strong>Location:</strong> {location}
                </Typography>
                <Typography color="textSecondary">
                  <strong>Cost:</strong> {cost}
                </Typography>
              </CardContent>
            </Card>
          )}
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}

export default DateIdeaSpinner;

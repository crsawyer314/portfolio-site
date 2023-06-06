import React from 'react';
// import PropTypes from "prop-types";
// import logo from './../assets/logo.svg';

const PageNotFound = ({ collapsed }) => {
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
    
      <div className="content">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>404 Page Not Found</h2>
        <h2>If you are on this page, it may be under construction.</h2>
      </div>
    </div>
  </div>
</div>
  );
}

// PageNotFound.propTypes = {};

// PageNotFound.defaultProps = {};

export default PageNotFound;

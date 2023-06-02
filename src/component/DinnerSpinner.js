import React from "react";
import Picker from './Picker';

const DinnerSpinner = ({ collapsed }) => {

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

            <Picker />

          </section>

        </div>
      </div>
    </div>
  );
}

export default DinnerSpinner;

import React from 'react';
// import PropTypes from "prop-types";

const JsSyllabus = ({ collapsed }) => {

  return (
    <div>
      <div id="main" className={collapsed ? "collapsed" : "expanded"}>
        <div className="inner">
          {/* <!-- Header --> */}
          <header id="header">
            <a href="index.html" className="logo">
              <strong>Catherine Sawyer</strong>
            </a>
            <ul className="icons">
              <li>
                <a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/crsawyer314" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </header>

          {/* <!-- Content --> */}
          <section>
            <header className="main">
              <button>
                <a href="/js_about">Prev - About</a>
              </button>
              <button>
                <a href="/js_1.1">Next - Lesson 1.1</a>
              </button>
              <h1>JavaScript for Beginners - Syllabus</h1>
            </header>

            <p>
              At the end of the course, you will feel confident in your ability to code in JavaScript and to learn more as
              needed by navigating online resources. You will have gained practical knowledge of how to read and understand
              code, generate code from scratch, read and use documentation and tutorials, and break a problem down into
              smaller pieces in order to solve it. You will also have generated one or more projects that you can use to
              demonstrate your skills to potential employers and others.
            </p>

            <p>The course will be broken into the following modules:</p>

            <hr className="major" />

            <p>
              <strong>Module 1</strong>: Introduction, tools setup, basic web design, and an overview of JavaScript - Get
              started, get used to the course structure, and set up your computer to start programming. Create a website that
              utilizes eventListeners buttons, and basic forms to incorporate interactivity.
            </p>
            <p>Example project: Create an informational website with a trivia game.</p>

            <hr className="major" />

            <p>
              <strong>Module 2</strong>: Basic Programming - Dig into some programming basics, including variables and data
              types, booleans and conditionals, operators and advanced loops.
            </p>
            <p>
              Example project: Enhance your website by moving the trivia game to its own tab and adding another tab with a todo
              list functionality.
            </p>

            <hr className="major" />

            <p>
              <strong>Module 3</strong>: Intermediate Programming - Learn about functions and classes, Object Oriented
              Programming (OOP), and Functional Programming paradigms.
            </p>
            <p>
              Example project: Choose OOP or Functional programming to enhance the functionality of your trivia game or todo
              list.
            </p>

            <hr className="major" />

            <p>
              <strong>Module 4</strong>: Advanced Programming Concepts - Dive into some further programming concepts,
              including recursion, error handling, and asynchrony in JavaScript.
            </p>
            <p>
              Example project: Add another tab to your webpage with a web-based game such as breakout, a maze solver, or a
              click-based RPG game.
            </p>

            <hr className="major" />

            <p>
              Each module will be broken into several lessons. Each lesson will be accompanied by several practice problems to
              assess your understanding, as well as some <em>Acceptance Criteria</em>, which will help you to know what is
              expected of your project at each point in the course. There will be a longer assessment at the end of each
              module to help assess your understanding. All assessments may be retaken as many times as necessary to achieve
              the desired result.
            </p>

            <br />
            <button>
              <a href="/js_about">Prev - About</a>
            </button>
            <button>
              <a href="/js_1.1">Next - Lesson 1.1</a>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

// JsSyllabus.propTypes = {};

// JsSyllabus.defaultProps = {};

export default JsSyllabus;

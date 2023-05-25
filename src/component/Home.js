import React from "react";
// import PropTypes from "prop-types";
import headshot from './../assets/catherine_sawyer_profile.jpg';
// import "./../styles/home.css"

const Home = ({ collapsed }) => {
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

          {/* <!-- Banner --> */}
          <section id="banner">
            <div className="content">
              <header>
                <h1>Hi, I’m Catherine</h1>
                <p>Technical educator, people manager, software developer, and creator</p>
              </header>
              <p>My passion is increasing diversity through code.</p>
              <p>Whether it is grade-school students wanting to learn a new hobby or adults looking to break into tech, there is a space for everyone to learn to code. I host some personal projects on this website, including my <a href="/#/js_about">JavaScript for Adult Beginners</a>, a course targeted at adults looking to upskill and learn code.</p>
              <p>This course is designed for those who have no prior knowledge about code or programming whatsoever, and will guide you not only through your learning journey, but also through the necessary steps to create a meaningful project for your personal portfolio.</p>
              <ul className="actions">
                <li><a href="/#/bio" className="button big">Learn More</a></li>
              </ul>
            </div>
            <span className="image object">
              <img src={headshot} className="headshot" alt="Headshot of Catherine Sawyer, woman in gray shirt with colorful short hair and glasses, smiling, tan background" />
            </span>
          </section>

          {/* <!-- Section --> */}
          <section>
            <header className="major">
              <h2>Pages</h2>
            </header>
            <div className="features">
              <article>
                <span className="icon fa-keyboard"></span>
                <div className="content">
                  <h3><a href="/#/js_about">JavaScript for Beginners</a></h3>
                  <p>A project-based JavaScript course designed for the adult novice. This link will bring you to the About page for the course.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-file"></span>
                <div className="content">
                  <h3><a href="/#/resumes">Resumes and Interviewing</a></h3>
                  <p>This page is still under construction. When completed, it will provide templates and guides for how to successfully create a technical software resume and succeed at interviewing.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-star"></span>
                <div className="content">
                  <h3><a href="/#/hobbies">Hobbies</a></h3>
                  <p>A place for me to display pictures of some of my favorite projects, including pyrography and quilting.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-utensils"></span>
                <div className="content">
                  <h3><a href="/#/dinner-spinner">Dinner Spinner</a></h3>
                  <p>Not sure what to cook tonight? Try out this nifty page to give you some good ideas.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;

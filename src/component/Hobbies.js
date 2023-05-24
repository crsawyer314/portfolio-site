import React from "react";
import pyro1 from './../assets/hobbies/pyro1.jpg';
import pyro2 from './../assets/hobbies/pyro2.jpg';
import pyro3 from './../assets/hobbies/pyro3.jpg';
import pyro4 from './../assets/hobbies/pyro4.jpg';
import pyro5 from './../assets/hobbies/pyro5.jpg';
import pyro6 from './../assets/hobbies/pyro6.jpg';
import pyro7 from './../assets/hobbies/pyro7.jpg';
import pyro8 from './../assets/hobbies/pyro8.jpg';
import pyro9 from './../assets/hobbies/pyro9.jpg';
import pyro10 from './../assets/hobbies/pyro10.jpg';
import pyro11 from './../assets/hobbies/pyro11.jpg';
import pyro12 from './../assets/hobbies/pyro12.jpg';
import pyro13 from './../assets/hobbies/pyro13.jpg';
import pyro14 from './../assets/hobbies/pyro14.jpg';
// import pyro15 from './../assets/hobbies/pyro15.jpg';
import quilt1 from './../assets/hobbies/quilt1.jpg';
import quilt2 from './../assets/hobbies/quilt2.jpg';
import quilt3 from './../assets/hobbies/quilt3.jpg';
import quilt4 from './../assets/hobbies/quilt4.jpg';
import quilt5 from './../assets/hobbies/quilt5.jpg';
import quilt6 from './../assets/hobbies/quilt6.jpg';
import quilt7 from './../assets/hobbies/quilt7.jpg';

const Hobbies = ({ collapsed }) => {
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
              <h1>Hobbies</h1>
            </header>

            <span className="image main"><img src="images/pic11j.pg" alt="" /></span>

            <p>Below are a few of my favorite projects. I enjoy pyrography, or the art of wood burning, quilting, and a few other odds and ends.</p>
          </section>

          <section>
            {/* <span className="image fit"><img src={pyro1} alt="" /></span> */}
            <div className="row gtr-50 gtr-uniform">
              <div className="col-4"><span className="image fit"><img src={pyro2} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro3} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro4} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro5} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro6} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro7} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro8} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro10} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro11} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro12} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro13} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro14} alt="" /></span></div>
              {/* <div className="col-4"><span className="image fit"><img src={pyro15} alt="" /></span></div> */}
              <div className="col-4"><span className="image fit"><img src={pyro1} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={pyro9} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt1} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt2} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt3} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt4} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt5} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt6} alt="" /></span></div>
              <div className="col-4"><span className="image fit"><img src={quilt7} alt="" /></span></div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Hobbies;

import React from "react";
import PhotoAlbum from "react-photo-album";

const quilt_photos = [
  { src: require('../images/quilt1.jpg'), width: 3024, height: 4032 },
  { src: require('../images/quilt2.jpg'), width: 4032, height: 3024 },
  { src: require('../images/quilt3.jpg'), width: 4032, height: 3024 },
  { src: require('../images/quilt4.jpg'), width: 4032, height: 3024 },
  { src: require('../images/quilt5.jpg'), width: 4032, height: 3024 },
  { src: require('../images/quilt6.jpg'), width: 4032, height: 3024 },
  { src: require('../images/quilt7.jpg'), width: 3024, height: 4032 },
  { src: require('../images/quilt8.jpg'), width: 3024, height: 4032 }
];

const pyro_photos = [
  { src: require('../images/pyro1.jpg'), width: 3024, height: 4032 },
  { src: require('../images/pyro2.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro3.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro4.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro5.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro6.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro7.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro8.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro9.jpg'), width: 3024, height: 4032 },
  { src: require('../images/pyro10.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro11.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro12.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro13.jpg'), width: 4032, height: 3024 },
  { src: require('../images/pyro14.jpg'), width: 4032, height: 3024 }
];

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

            <p>Below are a few of my favorite projects. I enjoy pyrography, or the art of wood burning, quilting, and a few other odds and ends.</p>
          </section>

          <section>
            <PhotoAlbum layout="rows" photos={pyro_photos} />
          </section>

          <section>
            <PhotoAlbum layout="rows" photos={quilt_photos} />
          </section>

        </div>
      </div>
    </div>
  );
}

export default Hobbies;

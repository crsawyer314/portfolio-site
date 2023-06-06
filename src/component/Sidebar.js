import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const mod1Title = "Module 1 - Introduction to Programming";
const mod1List = [
  {title: "1.1 Why software development, and why JavaScript?", link: "/#/js_1.1"},
  {title: "1.2 How to set up your computer for JavaScript development", link: "/#/js_1.2"},
  {title: "1.3 HTML and CSS Basics", link: "/#/js_1.3"},
  {title: "1.4 HTML and CSS Basics, cont", link: "/#/js_1.4"},
  {title: "1.5 Intro to Interactivity", link: "/#/js_1.5"},
  {title: "1.6 Variables and QuerySelector", link: "/#/js_1.6"},
  {title: "1.7 Arrays", link: "/#/js_1.7"},
  {title: "1.8 For loops", link: "/#/js_1.8"},
  {title: "1.9 Objects", link: "/#/js_1.9"},
  {title: "1.10 Forms and Buttons", link: "/#/js_1.10"},
  {title: "Assessment 1", link: "/#/js_1_assessment"}
];
// const mod2Title = "Module 2 - Basic Programming";
// const mod2List = [
//   {title: "2.1 Variables and data types", link: "/#/js_2.1"},
//   {title: "2.2 Mathematical and logical operators", link: "/#/js_2.2"},
//   {title: "2.3 Booleans and Conditionals (if/else statements)", link: "/#/js_2.3"},
//   {title: "2.4 Switch statements", link: "/#/js_2.4"},
//   {title: "2.5 While Loops", link: "/#/js_2.5"},
//   {title: "2.6 For Loops", link: "/#/js_2.6"},
//   {title: "Assessment 2", link: "/#/js_2_assessment"}
// ];
// const mod3Title = "Module 3 - Intermediate Programming";
// const mod3List = [
//   {title: "3.1 Functions", link: "/#/js_3.1"},
//   {title: "3.2 Advanced functions", link: "/#/js_3.2"},
//   {title: "3.3 OOP", link: "/#/js_3.3"},
//   {title: "3.4 Classes, cont", link: "/#/js_3.4"},
//   {title: "3.5 Functional programming", link: "/#/js_3.5"},
//   {title: "3.6 OOP vs Functional Programming", link: "/#/js_3.6"},
//   {title: "Assessment 3", link: "/#/js_3_assessment"}
// ];
// const mod4Title = "Module 4 - Advanced Programming";
// const mod4List = [
//   {title: "4.1 Recursion", link: "/#/js_4.1"},
//   {title: "4.2 Error handling", link: "/#/js_4.2"},
//   {title: "4.3 Promises", link: "/#/js_4.3"},
//   {title: "4.4 Promises, cont", link: "/#/js_4.4"},
//   {title: "4.5 Async/Await", link: "/#/js_4.5"},
//   {title: "Assessment 4", link: "/#/js_4_assessment"}
// ];

const Sidebar = ({ collapsed, toggleSidebar }) => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isPocketDrawerOpen, setIsPocketDrawerOpen] = useState(false);
  const [isPocketDrawerOpen1, setIsPocketDrawerOpen1] = useState(false);
  // const [isPocketDrawerOpen2, setIsPocketDrawerOpen2] = useState(false);
  // const [isPocketDrawerOpen3, setIsPocketDrawerOpen3] = useState(false);
  // const [isPocketDrawerOpen4, setIsPocketDrawerOpen4] = useState(false);

  const handlePocketDrawerToggle = () => {
    setIsPocketDrawerOpen(!isPocketDrawerOpen);
  };

  const handlePocketDrawerToggle1 = () => {
    setIsPocketDrawerOpen1(!isPocketDrawerOpen1);
  };

  // const handlePocketDrawerToggle2 = () => {
  //   setIsPocketDrawerOpen2(!isPocketDrawerOpen2);
  // };

  // const handlePocketDrawerToggle3 = () => {
  //   setIsPocketDrawerOpen3(!isPocketDrawerOpen3);
  // };

  // const handlePocketDrawerToggle4 = () => {
  //   setIsPocketDrawerOpen4(!isPocketDrawerOpen4);
  // };

  useEffect(() => {
    const getWindowWidth = () => {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
    };

    const handleWindowResize = () => {
      const width = getWindowWidth();
      setSidebarCollapsed(width < 736);
    };

    handleWindowResize(); // Set initial sidebar state

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setSidebarCollapsed(collapsed);
  }, [collapsed]);

  return (
    <div id="sidebar" className={sidebarCollapsed ? 'collapsed' : 'expanded'}>
      {/* <button className="toggle" onClick={toggleSidebar}>
        <span className="label">Toggle Sidebar</span>
      </button> */}
      <div className="inner">
        <nav id="menu">
          <br /><br /><br />
          <header className="major">
            <Typography>Menu</Typography>
          </header>
          <ul className="sidebar-menu">
            <li>
              <Typography>
                <a href="/#/home">Homepage</a>
              </Typography>
            </li>
            <li>
              <Typography>
                <a href="/#/bio">About</a>
              </Typography>
            </li>
            <li>
              <div className="sidebar-item-button" onClick={handlePocketDrawerToggle}>
                <span className="sidebar-item-title">
                  <Typography>JavaScript for Beginners</Typography>
                  <ExpandMoreIcon className="expand-icon" style={{ transform: isPocketDrawerOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </span>
              </div>
              {isPocketDrawerOpen && (
                <div className="submenu">
                  <ul>
                    <li><Typography><a href="/js_about">About</a></Typography></li>
                    <li><Typography><a href="/js_syllabus">Syllabus</a></Typography></li>
                    <li><Typography><a href="/resumes">Resumes and Interviewing</a></Typography></li>
                    <li>
                      <div onClick={handlePocketDrawerToggle1}>
                        <span className="sidebar-item-title">
                          <Typography>{mod1Title}
                          <ExpandMoreIcon className="expand-icon" style={{ transform: isPocketDrawerOpen1 ? 'rotate(180deg)' : 'rotate(0)' }} />
                          </Typography>
                        </span>
                        
                      </div>
                      {isPocketDrawerOpen1 && (
                        <div className="submenu">
                          <ul>
                            {mod1List.map((item, index) => (
                              <li key={index}>
                                <Typography><a href={item.link}>{item.title}</a></Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                    {/* <li>
                      <div onClick={handlePocketDrawerToggle2}>
                        <span className="sidebar-item-title">
                        <Typography>{mod2Title}
                          <ExpandMoreIcon className="expand-icon" style={{ transform: isPocketDrawerOpen2 ? 'rotate(180deg)' : 'rotate(0)' }} />
                        </Typography>
                        </span>
                        
                      </div>
                      {isPocketDrawerOpen2 && (
                        <div className="submenu">
                          <ul>
                            {mod2List.map((item, index) => (
                              <li key={index}>
                                <Typography><a href={item.link}>{item.title}</a></Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li> */}
                    {/* <li>
                      <div onClick={handlePocketDrawerToggle3}>
                        <span className="sidebar-item-title">
                        <Typography>{mod3Title}
                          <ExpandMoreIcon className="expand-icon" style={{ transform: isPocketDrawerOpen3 ? 'rotate(180deg)' : 'rotate(0)' }} />
                        </Typography>
                        </span>
                        
                      </div>
                      {isPocketDrawerOpen3 && (
                        <div className="submenu">
                          <ul>
                            {mod3List.map((item, index) => (
                              <li key={index}>
                                <Typography><a href={item.link}>{item.title}</a></Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li> */}
                    {/* <li>
                      <div onClick={handlePocketDrawerToggle4}>
                        <span className="sidebar-item-title">
                        <Typography>{mod4Title}
                          <ExpandMoreIcon className="expand-icon" style={{ transform: isPocketDrawerOpen4 ? 'rotate(180deg)' : 'rotate(0)' }} />
                        </Typography>
                        </span>
                        
                      </div>
                      {isPocketDrawerOpen4 && (
                        <div className="submenu">
                          <ul>
                            {mod4List.map((item, index) => (
                              <li key={index}>
                                <Typography><a href={item.link}>{item.title}</a></Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li> */}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Typography>
                <a href="/#/hobbies">Hobbies</a>
              </Typography>
            </li>
            <li>
              <Typography>
                <a href="/#/dinner-spinner">Dinner Spinner</a>
              </Typography>
            </li>
          </ul>
        </nav>
  
        <footer id="footer">
          <Typography className="copyright">
            &copy; Catherine Sawyer. All rights reserved.
          </Typography>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;

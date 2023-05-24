import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import JsAbout from "./component/JsAbout";
import JsSyllabus from "./component/JsSyllabus";
import Resumes from "./component/Resumes";
import Hobbies from "./component/Hobbies";
import DinnerSpinner from "./component/DinnerSpinner";
import Bio from "./component/Bio";
import Js1 from "./component/Js1";
import JsAssessment from "./component/JsAssessment";
import PageNotFound from "./component/PageNotFound";
import Js1Markdown from "./assets/js1-1.md";
import Js2Markdown from "./assets/js1-2.md";
import Js3Markdown from "./assets/js1-3.md";
import Js4Markdown from "./assets/js1-4.md";
import Js5Markdown from "./assets/js1-5.md";
import Js6Markdown from "./assets/js1-6.md";
import Js7Markdown from "./assets/js1-7.md";
import Js8Markdown from "./assets/js1-8.md";
import Js9Markdown from "./assets/js1-9.md";
import Js10Markdown from "./assets/js1-10.md";
import Js1Assessment from "./assets/js1-assessment.md";
import "./styles/main.css"


function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
    <div className={`App`}>
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <button className="toggle-button square" onClick={toggleSidebar}>
        {/* <span className="label">Toggle Sidebar</span> */}
        {sidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>
      <Router>
        <Routes>
          <Route path="/index.html" element={<Home collapsed={sidebarCollapsed} /> } />
          <Route path="/" element={<Home collapsed={sidebarCollapsed} /> } />
          <Route path="/home" element={<Home collapsed={sidebarCollapsed} /> } />
          <Route path="/bio" element={<Bio collapsed={sidebarCollapsed} /> } />
          <Route
            path="/js_1.1"
            element={
              <Js1
                mdFile={Js1Markdown}
                prev="/js_syllabus"
                next="/js_1.2"
                prevTitle="Syllabus"
                nextTitle="Lesson 1.2"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.2"
            element={
              <Js1
                mdFile={Js2Markdown}
                prev="/js_1.1"
                next="/js_1.3"
                prevTitle="Lesson 1.1"
                nextTitle="Lesson 1.3"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.3"
            element={
              <Js1
                mdFile={Js3Markdown}
                prev="/js_1.2"
                next="/js_1.4"
                prevTitle="Lesson 1.2"
                nextTitle="Lesson 1.4"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.4"
            element={
              <Js1
                mdFile={Js4Markdown}
                prev="/js_1.3"
                next="/js_1.5"
                prevTitle="Lesson 1.3"
                nextTitle="Lesson 1.5"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.5"
            element={
              <Js1
                mdFile={Js5Markdown}
                prev="/js_1.4"
                next="/js_1.6"
                prevTitle="Lesson 1.4"
                nextTitle="Lesson 1.6"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.6"
            element={
              <Js1
                mdFile={Js6Markdown}
                prev="/js_1.5"
                next="/js_1.7"
                prevTitle="Lesson 1.5"
                nextTitle="Lesson 1.7"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.7"
            element={
              <Js1
                mdFile={Js7Markdown}
                prev="/js_1.6"
                next="/js_1.8"
                prevTitle="Lesson 1.6"
                nextTitle="Lesson 1.8"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.8"
            element={
              <Js1
                mdFile={Js8Markdown}
                prev="/js_1.7"
                next="/js_1.9"
                prevTitle="Lesson 1.7"
                nextTitle="Lesson 1.9"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.9"
            element={
              <Js1
                mdFile={Js9Markdown}
                prev="/js_1.8"
                next="/js_1.10"
                prevTitle="Lesson 1.8"
                nextTitle="Lesson 1.10"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1.10"
            element={
              <Js1
                mdFile={Js10Markdown}
                prev="/js_1.9"
                next="/js_1_assessment"
                prevTitle="Lesson 1.9"
                nextTitle="Module 1 Assessment"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route
            path="/js_1_assessment"
            element={
              <JsAssessment
                mdFile={Js1Assessment}
                prev="/js_1.10"
                prevTitle="Lesson 1.10"
                collapsed={sidebarCollapsed}
              />
            }
          />
          <Route path="/resumes" element={<Resumes collapsed={sidebarCollapsed} /> } />
          <Route path="/hobbies" element={<Hobbies collapsed={sidebarCollapsed} /> } />
          <Route path="/dinner-spinner" element={<DinnerSpinner collapsed={sidebarCollapsed} /> } />
          <Route path="/js_about" element={<JsAbout collapsed={sidebarCollapsed} /> } />
          <Route path="/js_syllabus" element={<JsSyllabus collapsed={sidebarCollapsed} /> } />
          <Route path="*" element={<PageNotFound collapsed={sidebarCollapsed} /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  
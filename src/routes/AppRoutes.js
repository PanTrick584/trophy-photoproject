import React from "react";
import {  } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "../containers/StartPage";
import StoryPage from "../containers/StoryPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import { PATHS } from "../const/paths";
import MainLayout from "../containers/MainLayout";

export const AppRoutes = () => {
  let {START, STORY, ABOUT, CONTACT} = PATHS
  return (
    <Router>
      <MainLayout>
          <Routes>
              <Route exact path={START} element={<StartPage />} />
              <Route path={STORY} element={<StoryPage />} />
              <Route path={ABOUT} element={<About />} />
              <Route path={CONTACT} element={<Contact />} />
              <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </MainLayout>
    </Router>
  );
};

export default AppRoutes

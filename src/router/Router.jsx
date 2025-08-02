// src/routes/Router.jsx
import { Routes, Route } from "react-router";

import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";


const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
      </Route>
    </Routes>
  );
};

export default Router;

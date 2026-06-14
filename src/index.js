import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuHome from "./Menu/MenuHome";
import CategoryPage from "./Menu/CategoryPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MenuHome />} />
      <Route path="/menu/:categoryKey" element={<CategoryPage />} />
    </Routes>
  </BrowserRouter>
);

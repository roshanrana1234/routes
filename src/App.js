import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NabBar from "./components/NabBar";
import SummaryPage from "./pages/SummaryPage";
import Products from "./pages/Products";
import Laptop from "./pages/Laptop";
import SmartWatch from "./pages/SmartWatch";
import Mobile from "./pages/Mobile";
import Cloth from "./pages/Cloth";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <>
      <NabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="summary" element={<SummaryPage />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Mobile />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="watch" element={<SmartWatch />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="cloth" element={<Cloth />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;

//BrowserRouter,  Routes, Route, Nested Routing,

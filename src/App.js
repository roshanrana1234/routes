import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import SuccessFull from "./pages/SuccessFull";
import PageNotFound from "./components/PageNotFound";
import Products from "./pages/Products";
import Laptop from "./pages/Laptop";
import Mobile from "./pages/Mobile";
import Cloth from "./pages/Cloth";
import Students from "./pages/Students";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="success" element={<SuccessFull />} />
        <Route path="*" element={<PageNotFound />} />

        {/* Nested Routing   */}
        <Route path="product" element={<Products />}>
          <Route index element={<Laptop />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="cloth" element={<Cloth />} />
        </Route>
        {/* /product/cloth */}

        {/* Dynamic route */}
        <Route path="student" element={<Students />} />
        <Route path="student/:studentId" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;

// http://localhost:3000/ ==== path="/"  === (Default Page)

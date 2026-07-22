import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />}></Route>
          <Route path="company" element={<CompanyAbout />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product-details/:id" element={<ProductDetails />}></Route>
        {/*useParamsın linkdeki id değerini alabilmesi için :id demeliyiz. : bunun bir değişken olduğunu söyler */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

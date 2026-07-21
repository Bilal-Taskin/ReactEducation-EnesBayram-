import { useState } from "react";
import Product from "./product";
import "./App.css";
import Container from "./Container";

function App() {
  const productName = "Buzdolabı";
  const productPrice = "6000";

  //props ile componente ekran yansıtacağı değeri generic olark vermiş oluyoruz.
  return (
    <>
      <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={800} />
      <hr />
      <Product productName={productName} price={productPrice} />
      <hr />

      <Container>
        <Product productName={productName} price={productPrice}></Product>
      </Container>
    </>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;

  const navigate = useNavigate(); //bir yere yönlendirmek için kullanılan bir hook

  return (
    <div>
      <div>Ürün Detayı</div>
      <h3>İsim:{name}</h3>
      <h3>Fiyat:{price}</h3>
      <button
        onClick={() => {
          navigate("/product-details/" + id);
        }}
      >
        detayına git
      </button>
      <hr />
    </div>
  );
}

export default Product;

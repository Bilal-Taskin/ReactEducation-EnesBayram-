import React from "react";

function product({ productName, price }) {
  console.log({ productName, price });

  // const { productName, price } = props; Objec destructing ile böyle yaparak da değerleri çekebilriiz ama bunun daha ileri seviyesi, yukarıda kullandığım gibi direkt parametre geçmektir

  return (
    <div>
      <div>Ürün Bilgileri</div>
      <div>
        <div>İsim: {productName}</div>
        <div>Fiyat: {price}</div>
      </div>
    </div>
  );
}

export default product;

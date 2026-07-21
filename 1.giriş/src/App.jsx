import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { div } from "framer-motion/client";

//Sayfa ilk açıldığığnda render edilen html kodları buradadır. Burası main.jsx köprüsü ile index.html de root idli div içinde render edilir

//component: JAvascripteki fonksiyonu component deniyor(functional component). Bu componentler içinde return diyerek bir tane htmk içeriği dönülür

//mesela bunun adı App componenti
function App() {
  // javascript kodlari
  let a = 5;
  let b = 5;
  let isimler = ["a", "b", "c"];
  //jsx =  {} html içine js kod çıktıları gönderme

  return (
    <div>
      <p> {a} </p>
      <p> {b} </p>

      {isimler.map((isim, index) => (
        <div key={index}>{isim}</div>
        //key={index} vermiyince consolde uniqe key hatası aldık
      ))}
    </div>
  );
}

//bir componenti başka bir componente kullanmak için export edilmeli

export default App;

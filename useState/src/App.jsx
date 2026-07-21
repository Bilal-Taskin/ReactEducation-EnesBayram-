import { useState } from "react";
import "./App.css";
import { use } from "react";

function App() {
  //diğer programlma dillerinde değişken tanımlayaark verileri tutmanın karşlığı react'da useState hookunun kullanılmasıdır

  const [firstName, setFirstName] = useState("Bilal");
  const [lastName, setLastName] = useState("Taşkın");
  const [names, setNames] = useState(["Enes", "Adem", "Yakub"]);
  const [count, setCount] = useState(0);

  console.log(names);

  const handleChange = () => {
    setFirstName("Ayşenur");
    setLastName("Yıldız");
  };

  const arttir = () => {
    setCount(count + 1);
  };

  console.log("component render edildi"); //arttir butonuna her bastığımızda component tekrar render edilir. Kod yapısı çok büyük olan projelerde bu projenin çok yavaş çalışmasına neden olur

  return (
    <>
      {firstName} {lastName}
      <div>
        {/* butona tıklanınca useState içindeki değeri değiştirme */}
        <button
          onClick={() => {
            // setFirstName("Ayşenur");
            handleChange();
          }}
        >
          İsmi Değiştir
        </button>

        {/* useState dizi içideki elemanları gösterme */}
        <div>
          {names.map((name, index) => (
            <div key={index}> {name} </div>
          ))}
        </div>

        {/* bir useState içindeki değeri set methodunu kullanark değiştirince o copmpnent tekrardan render edilir */}

        <div>{count}</div>
        <button onClick={arttir}>Arttır</button>
      </div>
    </>
  );
}

export default App;

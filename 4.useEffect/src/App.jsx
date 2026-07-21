import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("herzaman çalışır");
  });

  useEffect(() => {
    console.log("component ilk render edildiğinde çalışır");
  }, []);

  useEffect(() => {
    console.log(
      "component ilk render edildiğinde ve firstName state değeri değiştiğinde  çalışır",
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "component ilk render edildiğinde ve lastName state değeri değiştiğinde  çalışır",
    );
  }, [lastName]);

  useEffect(() => {
    console.log(
      "component ilk render edildiğinde ve firstname veya lastName state değeri değiştiğinde  çalışır",
    );
  }, [firstName, lastName]);

  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>
        <button
          onClick={() => {
            setFirstName("Bilal");
          }}
        >
          Adı Değiştir
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setFirstName("Ahmet");
          }}
        >
          Adı Değiştir
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setFirstName("Yusuf");
          }}
        >
          Adı Değiştir
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setLastName("Taşkın");
          }}
        >
          Soyadı Değiştir
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setLastName("Kaya");
          }}
        >
          Soyadı Değiştir
        </button>
      </div>
    </>
  );
}

export default App;

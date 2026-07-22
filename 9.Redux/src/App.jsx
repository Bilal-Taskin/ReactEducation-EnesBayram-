import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //store içindeki state istenilen yerden erişimi sağlayan hooklar bunlardır. useSelector state, useDispatch ise fksiyonlara erşimemizi sağlayan hooklardır
import "./App.css";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  //const state = useSelector((store) => store.counter);
  //yukarıdakinin object distructingli hali

  /*
  çalşıma mantığı
  
  useSelector ile ilk parametre olan storu çektik, storun içinde bulunan countera eriştik.
  
  store içinde bulunan counter, yani counterReducer o da aslında import ettiğimiz counterSlice'ın içerisindeki initial stateini alır ve bize geri döndürür.

  Bir sliceın içindeki state değerine yukarıda açıklandığı gibi erişilir. Fonksiyona ise dispatch ile erişiriz

  
  
  
  */
  const { value } = useSelector((store) => store.counter);
  console.log(value);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>{value}</div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";
import useCopyToClipBoard from "../hooks/useCopyToClipBoard";

//hookların amacı uygulamamnın içinde bir çok yerde kullanmamzı gerekecek olan bir logic işlemi tutmak, ihtiyaç olan componentlere serpiştirmektir
function App() {
  const { count, increase, decrese } = useCounter();
  const { open, change } = useToggle();
  const [copied, copy] = useCopyToClipBoard("pes etme çalış");
  return (
    <>
      <div>{count}</div>
      <button onClick={increase}>Arttır</button>
      <button onClick={decrese}>Azalt</button>
      {open && (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        >
          kutu
        </div>
      )}

      <button onClick={change}>{open ? "Gizle" : "Göster"}</button>
      <div>
        {copied && "kopyalandı"}
        <button onClick={copy}>Kopyala</button>
      </div>
    </>
  );
}

export default App;

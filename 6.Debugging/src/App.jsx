import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const Average = () => {
    const result = Sum() / 2;
    Prints(result);
  };

  const Sum = () => {
    const result = vize1 + vize2;
    return result;
  };

  const Prints = (sonuc) => {
    console.log("avarage:" + sonuc);
  };
  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => setVize1(Number(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => setVize2(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={Average}>Ortalama Bul</button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Login from "./login"; //export default karşılaması
import { user } from "./login"; //sadece export karşılaması
import Hello from "./hello";

// sayfanın root idli divi içinde app render aedildiği için diğer büütün componentler App() componenti içine çağırılır
function App() {
  //console.log(user);

  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;

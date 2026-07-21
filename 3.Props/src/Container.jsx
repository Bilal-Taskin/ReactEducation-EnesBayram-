import React from "react";

function container({ children }) {
  console.log({ children });
  //container içinde tanımladığımız product componentini container içinde props(children ) olarak yakalayabildik
  return (
    <div>
      <div>container çalıştı</div>
      <div>{children}</div>
    </div>
  );
}

export default container;

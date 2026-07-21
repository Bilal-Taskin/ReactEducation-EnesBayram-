import React from "react";
// Bir componenti olduğu gibi export etmek için export default, component içinden bir kısmı export edecekseniz sadece export kullanılır

export const user = [
  {
    userName: "Bilal",
    password: "Taşkın",
  },
  {
    userName: "Ahmet",
    password: "Taşkın",
  },
];

function login() {
  return (
    <>
      <div>
        <div>
          <p>Kullanıcı adını</p>
          <input type="text"></input>
        </div>
        <div>
          <p>Şifreniz</p>
          <input type="text"></input>
        </div>

        <button> Giriş Yap</button>
      </div>
    </>
  );
}

export default login;

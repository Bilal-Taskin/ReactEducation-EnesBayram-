import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Anasayfa</Link>
      <Link to="/about">Hakkında</Link>{" "}
      {/* birisi hakındaya tıklarsa linke /about ekle. App.sx'de de şunu demiştik. Linkte /about görürsen <About/> componentni tetikle  */}
      <Link to="/products">Ürünlerimiz</Link>
      <Link to="/contact">İletişim</Link>
    </div>
  );
}

export default Header;

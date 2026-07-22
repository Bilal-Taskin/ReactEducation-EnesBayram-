import React from "react";
import { Link, Outlet } from "react-router-dom";

function about() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link to="employee">Employee About</Link>{" "}
      {/*Buradaki gidilecek sayfaların başına / koyarsak kendini kök zanneder ve böyle bir sayfa olmadığından sayfa bulunamaz*/}
      <hr />
      <Link to="company">Company About</Link>
      <Outlet />
      {/*nested linklerin ekrande render edilmeisni sağlar*/}
    </div>
  );
}

export default about;

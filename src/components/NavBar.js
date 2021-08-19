import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((e,index)=>{
      return <a key={index} href={`#${e}`}>{e}</a>
    })}
  </nav>;
}

export default NavBar;

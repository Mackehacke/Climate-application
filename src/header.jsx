import React from "react";
import header_img from "./header_img.png";
import logga from "./logga.png";

/* Denna komponent är vår header. Den består av en header-bild samt logotyp. */
const Header = () => {
  return (
    <header>
      <img
        src={logga}
        className="logo"
        alt="Logga"
        style={{ width: "20%", height: "100%" }}
      />
    </header>
  );
};

/* Headerns design styrs av style. */

export default Header;

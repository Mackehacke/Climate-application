import React from "react";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* I denna funktion/komponent finns vår footer. Den finns med på alla vyer. Länkarna/ikonerna till sociala medier är icke-funktionella och de är hämtade från FontAwesome. */
function Footer() {
  return (
    <footer className="d-flex justify-content-between">
      <div classnamn="icon">
        <a href="/">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

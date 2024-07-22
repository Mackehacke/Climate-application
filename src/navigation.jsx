import React from "react";

/* Nedanstående importerar de ikoner som syns brevid texten i navigationen */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGasPump,
  faIcicles,
  faGamepad,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav"; /* Importerar Nav från Bootstrap */
import { Link } from "react-router-dom";

/* Funktionen/komponenten för navigationen. */
function Navigation() {
  return (
    <div className="navigation">
      <Nav defaultActiveKey="/home">
        <div className="position-fixed">
          <Nav.Link as={Link} to="/startpage">
            {/* Här kopplas ikonerna in så att de syns på sidan*/}
            <FontAwesomeIcon icon={faHome} /> Hem
          </Nav.Link>
          {/* as={link} behövs för att Nav.Link är inte link från react-router-dom utan från Bootstrap. Utan as={link} funkar inte routingen. */}
          <Nav.Link as={Link} to="/fossilepage">
            <FontAwesomeIcon icon={faGasPump} /> Fossila bränslen
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faIcicles} /> Glaciärer
          </Nav.Link>
          <Nav.Link as={Link} to="/quizpage">
            <FontAwesomeIcon icon={faGamepad} /> Quiz
          </Nav.Link>
          <Nav.Link eventKey="link-4">
            <FontAwesomeIcon icon={faInfoCircle} /> FAQ
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
}

export default Navigation;

/* I navigationen har vi använt oss av link från react-router-dom för att göra navigationen mellan de olika vyerna möjlig. */

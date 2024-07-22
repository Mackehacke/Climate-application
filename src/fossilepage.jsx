import React from "react";
import { useState, useEffect } from "react";
import bilbild from "./bilbild.jpg";
import bensinbild from "./bensinbild.jpg";
import pratbubbla_fossila from "./pratbubbla_fossila.png";

import { Co2LineChart } from "./Co2LineChart";

const FossilePage = () => {
  /* Statevariabeln nedan används för att hämta CO2-data från .json-filen. co2data är vad som ska hämtas medan setCo2data är en funktion 
  som används för att hämta själva informationen. Ursprungslägen är en tom array. */
  const [co2data, setCo2data] = useState([]);

  /* Här nedan hämtas datan med hjälp av useEffect och fetch. */
  useEffect(() => {
    setCo2data([]);
    const url = "CO2EmissionsData.json"; //Här är filen med data som används till grafen och den hämtas sedan med fetch.

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setCo2data(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center hContainerFossile">Fossila bränslen</h2>
      <img
        className="bilbild_fossil"
        src={bilbild}
        alt="Bild inifrån en bil."
      />
      <div className="textContainerFossile">
        <h3>Vad är fossila bränslen?</h3>
        <p>
          Fossila bränslen är naturgas, gasol, kol och olja. De är en rest från
          dåtidens växter och djur. Döda växter och små vattendjur som legat på
          botten av insjöar och hav blir under miljontals år till fossila
          bränslen. Det är genom värme och högt tryck som växterna och djuren
          blir till kol samt kolföreningar. <br />
          <br />
          Fossila bränslen är den största källan till utsläpp av växthusgaser
          som bidrar till klimatförändring.
        </p>
      </div>
      <div className="p-4">
        <img
          className="bensinBild"
          src={bensinbild}
          alt="Bild på ett kärnkraftverk.."
        />
        <p className="text-center">Bensin innehåller fossila bränslen.</p>
      </div>
      <div className="textContainerFossile">
        <h3>Fossila bränslen och klimatet</h3>
        <p>
          Fossila bränslen påverkar klimatet på många olika sätt. Bland annat
          orsakar förbränning av fossila bränslen utsläpp av koldioxid. Det
          bidrar till växthuseffekten. Det beror på att utsläppet av koldioxid
          stannar ovan mark. Denna koldioxid har inte varit med i kretsloppet
          tidigare. Fossila bränslen står för majoriteten av människans
          växthusgaser. Dessa utsläpp värmer upp vår planet. Fossila bränslen är
          därmed den största orsaken till de snabba klimatförändringarna
          globalt.
        </p>
      </div>
      <div>
        <img
          className="pratbubblafossila"
          src={pratbubbla_fossila}
          alt="Pratbubbla med text om klimatet"
        />
      </div>
      <div className="textContainerFossile">
        <h4>Användingen av fossila bränslen ökar</h4>
        <p>
          Världsnaturfonden WWF skriver hur vi måste nå ett samhälle som består
          av 100% fossilfria bränslen, för att kunna skapa en hållbar framtid.
          Fossila bränslen som kol, olja och gas bidrar till livshotande
          klimatförändringar, miljöförstöring och negativa hälsoaspekter. Trots
          detta kan vi se en ökning av dessa bränslen i samhället, enligt grafen
          nedan som visar hur mycket CO2-utsläpp det blir av de olika bränslena.
          Grafen visar hur användningen av fossila bränslen har ökat drastiskt
          sedan 1900-talet. WWF skriver också hur 75% av alla växthusgasutsläpp
          kommer från fossila bränslen, vilket bidrar till våra negativa
          klimatförändringar.
        </p>
      </div>
      <div className="m-5">
        {/* Här nedan i div:en är grafen och med hjälp av d-flex och justify-content-center placeras den i mitten av sidan. */}
        <div className="d-flex justify-content-center">
          {/* Nedan är en retursektion. Det är här som komponenten Co2LineChart placeras på fossilsidan. */}
          <>
            {co2data.length > 0 && (
              <Co2LineChart myData={co2data}></Co2LineChart>
            )}
          </>
        </div>
        <p className="text-center">
          Grafen visar hur användningen av fossila bränslen har ökat.
        </p>
      </div>
      <div className="test">
        <h3 className="text-center">En video om fossila bränslen</h3>
        {/* Nedan är en YouTube-video. Iframe används för att bädda in videon på sidan. Olika klasser används för designen och responsiviteten.  */}
        <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
          <iframe
            className="embed-responsive-item fossilVideo"
            src="https://www.youtube.com/embed/LLdqSPdaXu0"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-center">
          Videon förklarar vad fossila bränslen är för något.
        </p>
      </div>
    </div>
  );
};

export default FossilePage;

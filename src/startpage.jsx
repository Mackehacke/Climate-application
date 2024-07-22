import React from "react";

import ImageSlider from "./imageslider"; // Här importeras bildspels-komponenten.
import quizknapp from "./quizknapp.png"; // För att impoerta knappen till quizsidan
import pratbubbla_start from "./pratbubbla_start.png"; // För att impoerta pratbubbla-bilden
import { Link } from "react-router-dom"; // För att navigationen ska fungera

const StartPage = () => {
  /* I const slides finns de fem olika bilderna som tillhör bildspelet.  */
  const slides = [
    {
      url: "https://www.viia.com/wp-content/uploads/2019/11/environmental-protection-326923_1280-1-1.jpg",
      title: "trad",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/12/13/15/42/alaska-566722_1280.jpg",
      title: "glaciar",
    },
    {
      url: "https://cdn.pixabay.com/photo/2022/08/19/09/05/volcano-7396466_1280.jpg",
      title: "vulkan",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/06/21/20/11/power-station-374097_1280.jpg",
      title: "kraftverk",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/10/25/12/28/iceland-1768744_1280.jpg",
      title: "vattenfall",
    },
  ];

  /* För att skriva ut divar med olika text och bildelement */
  return (
    <div>
      <p className="uppdaterad">Sidan uppdaterad: 2023-12-19</p>
      <h1 className="text-center">Klimat är kul, God Jul!</h1>
      <div className="imageSliderStyles">
        <ImageSlider slides={slides} />
        <p className="text-center mt-5">
          Utforska vårt bildspel för att se vad webbplatsen handlar om!
        </p>
      </div>

      <div className="textContainerStart1">
        <h2>Din klimatguide</h2>
        <p>
          På denna webbplats kan du läsa om klimatet och klimatförändringar.{" "}
          <br />
          Klicka dig runt på webbplatsen och läs på om olika ämnen som fossila
          bränslen och glaciärer för att sedan testa dina kunskaper i vårt
          klimatquiz.
          <br />
          <br />
          Att lära sig något nytt ska vara roligt!
        </p>
      </div>

      <div>
        {/* För att få fram bilden på pratbubblan */}
        <img
          className="pratbubblastart"
          src={pratbubbla_start}
          alt="Pratbubbla med text om klimatet"
        />
      </div>

      {/* Textelement */}
      <div className="textContainerStart2">
        <h3>Vad är klimatförändringar?</h3>
        <p>
          I alla tider har jordens klimat varierat naturligt. Nu för tiden sker
          klimatförändringar mycket snabbare och det är människans verk.
          Fortsätter vi att släppa ut växthusgaser i samma takt som nu kommer
          temperaturerna fortsätta att stiga. Ett annat namn för detta är global
          uppvärmning. Jordens klimat blir varmare. Sedan 1800-talets andra
          hälft har medeltemperaturen ökat med en dryg grad. Det här låter inte
          mycket, men får stora konsekvenser. Förutom att luften blir varmare
          blir även världshaven varmare. Det här leder tilll att världens isar
          smälter och höjda havsnivåer. De snabba klimatförändringarna gör att
          ekosystemen inte hinner anpassa sig.
        </p>
      </div>
      {/* Denna div visar den inbäddade youtubevideon. */}
      <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center pt-5">
        <iframe
          className="embed-responsive-item startVideo"
          src="https://www.youtube.com/embed/H71LG6xgZII"
          allowfullscreen
        ></iframe>
      </div>
      <p className="text-center">
        Se videon som förklarar klimatförändringar på en minut.
      </p>
      {/* Denna bild fungerar som en länk som leder till quizsidan */}
      <Link to={"/quizpage"}>
        <img
          className="quiz_knapp pt-2"
          src={quizknapp}
          alt="Knapp till quiz"
        />
      </Link>
      <p className="text-center">Testa dina kunskaper i vårt klimatquiz.</p>
    </div>
  );
};

export default StartPage;

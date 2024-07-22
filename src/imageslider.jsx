import React, { useState } from "react";

/* const slideStyles styr design i bildspelet. */
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* Koderna nedan styr designen och positionen på högerpilen i bildspelet. */
const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#ffffff",
  zIndex: 1,
  cursor: "pointer",
};

/* Koderna nedan styr designen och positionen på vänserpilen i bildspelet. */
const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#ffffff",
  zIndex: 1,
  cursor: "pointer", //Muspekaren får en pointereffekt när pilen hovras över.
};

/* Denna gör så att div:en med style={sliderStyle} får 100% i höjd samt position relative. */
const sliderStyles = {
  position: "relative",
  height: "100%",
};

/* Koderna nedan styr designen på punkterna som används för att gå direkt till specifika bilder i bildspelet. */
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

/* Denna komponent är bildspelet som visas på startsidan. Bildspelet består av fem bilder och det går att navigera fram och tillbaka i bildspelet. För att skapa bildspelet har guiden i videon https://www.youtube.com/watch?v=SK9AlIbexOE följts. */
const ImageSlider = ({ slides }) => {
  /* currentIndex är index av bildspelet. UseStatehook är 0 från början. */
  const [currentIndex, setCurrentIndex] = useState(0);
  /* Koderna nedan är kopplade till pilen för att gå till föregående bild. */
  const goToPrevious = () => {
    /* Från början är användaren på positionen 0 (första bilden) när sidan laddas. För att göra så att man kommer till sista bilden i bildspelet när pilen klickas på behövs koderna nedan. */
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    /* Om bildspelet är på första bilden blir det bildspelets längd -1, men är den på en annan bild i bildspelet blir det currentIndex (nuvarande bilden) -1. */
    setCurrentIndex(newIndex);
  };
  /* Koderna nedan är kopplade till pilen för att gå till nästa bild. */
  const goToNext = () => {
    /* Här är det ungefär som ovan, men koderna ser till att ifall användaren är på sista bilden så kommer den till första bilden ifall pilen klickas på. */
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  /* goToSlide handlar om att kunna klicka på punkterna under bildspelet för att komma till en särkskild bild. */
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  /* Denna funktion visar de olika bilderna i bildspelet. */
  const slideStylesWidthBackground = {
    ...slideStyles,
    /* Med backgroundImage som är currentIndex från början blir bakgrundsbilden i bildspelet den första bilden i array-objektet. Bilderna finns i StartPage-komponenten. */
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  /* För att kunna klicka framåt eller bakåt i bildspelet */
  return (
    <div style={sliderStyles}>
      <div>
        {/* När vänsterpilen klickas på aktiveras funktionen (genom onClick-event) goToPrevious som tar användaren tillbaka till föregående bilden i bildspelet. */}
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        {/* När högerpilen klickas på aktiveras funktionen (genom onClick-event) goToNext som tar användaren till nästa bild i bildspelet. */}
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      {/* Här appliceras det vi skrev in i slideStylesWidthBackground i div:en nedan. */}
      <div style={slideStylesWidthBackground}></div>
      {/* Här kommer stylingen i div:en från dotsContainerStyles. */}
      <div style={dotsContainerStyles}>
        {/* onClick nedan gör att när man klickar på en av punkterna aktiveras funktionen goToSlide som tar en till en specifik bild i bildspelet. Varje punkt motsvarar en bild i bildspelet. Nedan finns även slides.map som gör att "bildsplet"/slides mappas/loopas igenom. */}
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

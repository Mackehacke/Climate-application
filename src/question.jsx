import React from "react";
import bakgrund_quiz from "./bakgrund_quiz.png"; // Importerar bakgrundsbilden för quizet.

/* Denna komponent handlar om att skicka fråghorna som quizet visar. Denna komponent ansvar för att enbart visa en fråga i taget. Det finns props eftersom vi vill skicka data/frågor till denna komponent. */
const Question = (props) => {
  const data = props.data;
  /* Nedan finns en data === undefined eftersom ifall ingen data hittas ska det inte bli fel utan det ska istället visas en paragraf där det står att det inte finns någon data. Om data finns tillgängligt visas allt som ska visas. */
  if (data === undefined) return <p>Det finns ingen data.</p>;
  /* onAnswer här är en callback-funktion som notifierar den överordnade komponenten (QuizPage) när användaren väljer ett svar. */
  const handleChange = (e) => {
    props.onAnswer(e.target.value);
    //Notifiera överordnad komponent.
  };
  /* currentQuestion är den data som skickas. */
  const currentQuestion = data;
  /* currentUserAnswer är frågan som användaren svarar på för tillfället. */
  const currentUserAnswer = data.currentUserAnswer;
  return (
    <div
      className="card mt-4 questionComponent"
      style={{
        minHeight: "25rem",
        backgroundImage: `url(${bakgrund_quiz})`, //Här är bakgrundsbilden som används.
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Ovan är styling för hur quizet ska se ut. */}
      <div className="card-header text-center">
        <h3 className="quizFont">Testa dina kunskaper</h3>
      </div>
      <div className="card-body">
        {/* Index handlar här om att skicka Index(place) för frågorna. Det är index av frågorna som är i arrayen (är det t.ex. första/tredje frågan). */}
        <h4 className="card-title">
          {props.index + 1 + ". " + currentQuestion.question}
        </h4>
        {/* För att kunna visa alla svaren till frågan behövs .all_answers mappas/loopas igenom. type="radio" är radioknappar. */}
        {currentQuestion.all_answers.map((answer) => (
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={answer}
              checked={currentUserAnswer === answer ? true : false}
              onChange={handleChange}
            />
            {/* checked används för att spara användarens svar i quizet. Answer kollas om det är true eller false. Answer är användarens svar. */}
            <label className="form-check-label" for="flexRadioDefault1">
              {answer}
            </label>
            {/* Här ovan kommer svarsalternativen, där det står {answer}. */}
          </div>
        ))}
      </div>
      {/* numberOfQuestion handlar om att skicka totala antalet av frågor. Här nedan räknas vilken fråga av det totala antalet frågor användaren är på. */}
      <div className="card-footer">
        Fråga {props.index + 1} av {props.numberOfQuestion}
      </div>
    </div>
  );
};

export default Question;

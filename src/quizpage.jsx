import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

/* Här nedan är de tre komponenterna som behövs för att quizet ska fungera. */
import Question from "./question";
import QuizResult from "./quizResult";
import ShuffleArray from "./shuffleArray";

/* Denna komponent innehåller knapparna för att gå fram och tillbaka i quizet samt slutförknappen. Denna komponent styr vilken fråga som ska visas och den hanterar tillstånd. */
const QuizPage = () => {
  /* Vi skapar component state för att spara datan i komponenten. */
  const [QuizData, setQuizData] = useState([]);
  //currentIndex är frågan som visas, ursprungslägen är 0.
  const [currentIndex, setCurrentIndex] = useState(0);
  /* Här nedan tillhör pop-upfönstret/modal som dyker upp när användaren slutför quizet. Ursprungsläget är false. */
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const url = "/data/quizdata.json"; // Från denna .json-fil kommer data för quizet, dvs. frågorna och svaren.
    fetch(url) // Fetch används för att hämta .json-filen.
      .then((response) => response.json())
      .then((data) => {
        // .then handlar här om att vänta tills datan är tillgänglig.
        data.map(
          /* För att all data, både rätt svar och fel svar, ska ingå i samma attribut behövs koderna nedan. all_answers består av både rätta och felaktiga svar. */
          (p) => (p.all_answers = [p.correct_answer, ...p.incorrect_answers]),
        );
        /* ShuffleArray är komponenten för att slumpa arrayen och ge den en annan ordningsföljd. Den finns här eftersom den ska se till att ordningsföljden på frågor och svar slumpas varje gång när quizet laddas. */
        ShuffleArray(data);
        data.map((p) => ShuffleArray(p.all_answers));
        setQuizData(data); //Här sparas datan.
      });
  }, []);
  //[] finns där eftersom vi bara ska hämta data en gång.

  /* handlePrev och handleNext är funktioner för att få "Föregående fråga"- och "Nästa fråga"-knappen att fungera. */
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1); //-1 för att gå tillbaka från nuvarande frågan.
  };
  const handleNext = () => {
    if (currentIndex < QuizData.length - 1) setCurrentIndex(currentIndex + 1); // +1 för att gå till nästa fråga från nuvarande frågan.
  };
  /* QuizData innehåller data för quizet, som frågor och svar. CurrentIndex innehåller den med data för quizet, men nu handlar det om frågan som användaren ser för tillfället och ska svara på. currentUserAnswer är den fråga som användaren svarar på för tillfället. */
  /* const onAnswer är till för att hantera onAnswer event.*/
  const onAnswer = (ans) => {
    QuizData[currentIndex].isCorrect =
      QuizData[currentIndex].correct_answer == ans;
    QuizData[currentIndex].currentUserAnswer = ans;
    setQuizData([...QuizData]); //Används för att uppdatera data.
  };
  /* currentUserAnswer behövs för att jämföra svaret användaren valt med det korrekta svaret. isCorrect används för att visa det som sant eller falskt. */

  /* Denna funktion är kopplad till slutför-knappen. setModalShow blir true och pop-up fönstret kommer upp när knappen klickas på. */
  const handleFinish = () => {
    setModalShow(true);
  };
  /* all_answers är alla svaren som tillhör frågan. */
  const handleReset = () => {
    setCurrentIndex(0); //Quizet återställs.
    QuizData.map((p) => (p.currentUserAnswer = ""));
    ShuffleArray(QuizData); //Frågorna shufflas vilket gör att ordningsföljden på frågorna blir annorlunda.
    QuizData.map((p) => ShuffleArray(p.all_answers)); //Här shufflas svaren till frågorna så att även de får en annan ordningsföljd.
    setQuizData([...QuizData]);
  };
  /* QuizData.map-delen tar bort alla svaren som användaren har gjort tidigare, eftersom de sparades förut. */
  return (
    <div>
      <h2 className="text-center hContainerQuiz quizFont">Klimatquiz</h2>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            {/* Nedanför är quizData alla frågor och svar medan [currentIndex] är den nuvarande frågan användaren är på. */}
            <Question
              data={QuizData[currentIndex]}
              index={currentIndex}
              numberOfQuestion={QuizData.length}
              onAnswer={onAnswer}
            ></Question>
            <div className="d-flex justify-content-between mt-2">
              {/* Nedanför är de två knapparna för att gå fram och tillbaka i quizet. */}
              <div>
                <a href="#" className="btn backButton m-2" onClick={handlePrev}>
                  Föregående fråga
                </a>
                <a href="#" className="btn forwardButton" onClick={handleNext}>
                  Nästa fråga
                </a>
              </div>
              {/* Nedanför är knappen för att slutföra quizet. Den visas bara ifall användaren är på den sista frågan (ifall currentIndex är sista frågan). */}
              <div>
                {currentIndex == QuizData.length - 1 && (
                  <a
                    href="#"
                    className="btn finishButton m-2"
                    onClick={handleFinish}
                  >
                    Slutför
                  </a>
                )}
              </div>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
      {/* Här kommer komponenten QuizResult in. Det som skickas hit är antalet frågor och antalet frågor som har svarats rätt på. QuizData filtreras för att enbart visa vilka frågor som var rätt. Den räknar ut hur många frågor som var rätt. handleReset handlar om att återställa quizet och se till att frågorna och svaren shufflas. */}
      <QuizResult
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          handleReset();
        }}
        numberOfQuestion={QuizData.length}
        numberOfCorrectAnswers={QuizData.filter((p) => p.isCorrect).length}
      ></QuizResult>
      {/* onHide, alltså när pop-up rutan stängs ner eller man klicakr utanför den ställer om setModalShow till false igen och rutan visas ej mer. */}
    </div>
  );
};

export default QuizPage;

import { Modal, Button } from "react-bootstrap"; //Importerar modal och button från react-bootstrap.

/* Denna komponent handlar om att visa användaren hur många frågor som var rätt när användaren valt att slutföra quizet. Denna komponent ansvarar för att visa quizets resultat. Den dyker upp som en pop-up ruta på quiz-sidan. */
function QuizResult(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          *** Ditt Quiz-resultat ***
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* numberOfCorrectAnswers skickar antalet rätta svar medan numberOfQuestions skickar antalet frågor. Det visar då hur många frågor som var rätt av antalet frågor. */}
        <h4>
          Du har besvarat {props.numberOfCorrectAnswers} av{" "}
          {props.numberOfQuestion} frågor rätt.
        </h4>
        <p>
          Du kan klicka på stäng-knappen och göra om quizet. Observera att
          ordningsföljden på frågorna kommer att vara annorlunda.
        </p>
      </Modal.Body>
      {/* Här nedan i pop-up fönstrets footer finns knappen för att stänga ner fönstret. onHide-funktionen aktiveras då och fönstret stängs. */}
      <Modal.Footer>
        <Button className="closeButton" onClick={props.onHide}>
          Stäng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QuizResult;

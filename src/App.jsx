import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Denna behövs för att hämta bootstrap.
import { Route, Routes, Navigate } from "react-router-dom";

/* Nedan importeras alla komponenter som används i applikationen (som är kopplade direkt till app.jsx). */
import FossilePage from "./fossilepage.jsx";
import QuizPage from "./quizpage.jsx";
import StartPage from "./startpage";
import Navigation from "./navigation";
import Header from "./header";
import Footer from "./footer";

/* App komponenten är den så kallade parentkomponenten som allt är kopplat till. */
export default function App() {
  return (
    <>
      <Header />

      <div class="container-fluid">
        <div class="row">
          <div class="col-3" style={{ backgroundColor: "#567B74" }}>
            <Navigation />
          </div>
          <div class="col-9">
            {/* Routes kommer från react-router-dom och används för att kunna navigera mellan de olika vyerna på webbplatsen. */}
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/startpage" element={<StartPage />} />
              <Route path="/fossilepage" element={<FossilePage />} />
              <Route path="/quizpage" element={<QuizPage />} />
              <Route
                path="*"
                element={<Navigate to="/fossilepage" replace />}
              />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

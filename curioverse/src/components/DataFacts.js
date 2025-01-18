import React, { useState } from "react";
import '../styles/App.css'

const DataFacts = () => {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await fetch("http://numbersapi.com/random/trivia");
      const data = await response.text();
      setFact(data);
    } catch (error) {
      setFact("Error al obtener datos curiosos.");
    }
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header">Datos Curiosos</div>
      <div className="card-body">
        <p className="card-text">{fact || "Haz clic para obtener un dato curioso."}</p>
        <button className="btn btn-primary" onClick={fetchFact}>
          Obtener Dato Curioso
        </button>
      </div>
    </div>
  );
};

export default DataFacts;

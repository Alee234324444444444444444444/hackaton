import React, { useState } from "react";
import "../styles/App.css";

const DataFacts = () => {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await fetch("http://numbersapi.com/random/trivia");
      const data = await response.text();
      setFact(data);
    } catch (error) {
      setFact("Error when obtaining curious Facts.");
    }
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header">Curious Facts</div>
      <div className="card-body">
        <p className="card-text">
          {fact || "Click for a fun fact."}
        </p>
        <button className="btn btn-primary mb-3" onClick={fetchFact}>
          <i className="bi bi-lightbulb me-2"></i> Get Curious Fact
        </button>
      </div>
    </div>
  );
};

export default DataFacts;

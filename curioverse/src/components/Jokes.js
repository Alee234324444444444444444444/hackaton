import React, { useState } from "react";
import "../styles/App.css";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await response.json();
      setJoke(data.joke || "Error getting the joke.");
    } catch (error) {
      setJoke("Error getting the joke.");
    }
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header">Jokes</div>
      <div className="card-body">
        <p className="card-text">
          {joke || "Click to hear a joke."}
        </p>
        <button className="btn btn-success mb-3" onClick={fetchJoke}>
          <i className="bi bi-emoji-laughing me-2"></i> Get Joke
        </button>
      </div>
    </div>
  );
};

export default Jokes;

import React, { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      const data = await response.json();
      setJoke(data.joke || "Error al obtener el chiste.");
    } catch (error) {
      setJoke("Error al obtener el chiste.");
    }
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header">Chistes</div>
      <div className="card-body">
        <p className="card-text">{joke || "Haz clic para escuchar un chiste."}</p>
        <button className="btn btn-success" onClick={fetchJoke}>
          Obtener Chiste
        </button>
      </div>
    </div>
  );
};

export default Jokes;

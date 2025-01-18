import React, { useState } from "react";

const FunTranslations = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("yoda");
  const languages = [
    { value: "yoda", label: "Yoda" },
    { value: "pirate", label: "Pirata" },
    { value: "minion", label: "Minion" },
    { value: "klingon", label: "Klingon" },
  ];

  const translateText = async () => {
    try {
      const response = await fetch(
        `https://api.funtranslations.com/translate/${language}.json?text=${encodeURIComponent(inputText)}`
      );
      const data = await response.json();
      setTranslatedText(data.contents.translated || "Error en la traducción.");
    } catch (error) {
      setTranslatedText("Error en la traducción.");
    }
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header">Traducciones Divertidas</div>
      <div className="card-body">
        <textarea
          className="form-control mb-3"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe algo para traducir..."
        />
        <select
          className="form-select mb-3"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
        <button className="btn btn-warning mb-3" onClick={translateText}>
          Traducir
        </button>
        <p className="card-text">
          <strong>Idioma:</strong> {languages.find((lang) => lang.value === language)?.label}
        </p>
        <p className="card-text">{translatedText}</p>
      </div>
    </div>
  );
};

export default FunTranslations;

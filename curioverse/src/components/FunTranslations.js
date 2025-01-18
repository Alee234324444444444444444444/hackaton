import '../styles/App.css'
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
        `https://api.funtranslations.com/translate/${language}.json?text=${encodeURIComponent(
          inputText
        )}`
      );
      const data = await response.json();
      setTranslatedText(data.contents.translated || "Translation error.");
    } catch (error) {
      setTranslatedText("Translation error.");
    }
  };

  return (
    <div className="card text-center m-3">
      <div className="card-header">Fun Translations</div>
      <div className="card-body">
        <textarea
          className="form-control mb-3"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="
Write something to translate..."
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
          <i className="bi bi-translate"></i> Translate
        </button>
        <p className="card-text"></p>
        <p className="card-text">{translatedText}</p>
      </div>
    </div>
  );
};

export default FunTranslations;

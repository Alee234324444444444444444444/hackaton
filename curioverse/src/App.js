import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataFacts from "./components/DataFacts";
import Jokes from "./components/Jokes";
import FunTranslations from "./components/FunTranslations";
import Header from "./components/Header";
import './styles/App.css'

const App = () => {
  
  return (
    <div className="bg-info">
      <Header />
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="p-3 border bg-light"><DataFacts /></div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border bg-light"><Jokes /></div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border bg-light"><FunTranslations /></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;

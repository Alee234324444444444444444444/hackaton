import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import DataFacts from "./components/DataFacts";
import Jokes from "./components/Jokes";
import FunTranslations from "./components/FunTranslations";
import Header from "./components/Header";
import './styles/App.css'

const App = () => {
  
  return (
    <div className="bg-info" style={{
      backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-sunset-pale-pink-and-purple-anime-sky-image_15538324.png')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
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

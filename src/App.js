import React from "react";
import './styles/App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Main} from "./components/Main/Main";
import {Marketplace} from "./components/Marketplace/Marketplace";
import {CreateBlock} from "./components/CreateBlock/CreateBlock";
import {Artists} from "./components/Artists/Artists";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Marketplace />
      <CreateBlock />
      <Artists />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

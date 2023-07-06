import React from "react";
import styled from "styled-components";
import './styles/App.css';
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Marketplace from "./components/Marketplace/Marketplace";
import CreateBlock from "./components/CreateBlock/CreateBlock";
import Artists from "./components/Artists/Artists";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const AppWrapper = () => styled.div`
background-image: url('/public/img/BgIMage.png');
background-repeat: no-repeat;
background-size: cover;
position: relative;
`

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

import React from "react";
import { NavBar, Main, Marketplace, CreateBlock, Artists, Contact, Footer } from '../src/components/index.jsx';
import './styles/App.css';



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

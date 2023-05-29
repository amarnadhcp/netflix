import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,originals,Comedy,Horror,Romance} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={Comedy} title="comedy" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={Romance} title="Romance" isSmall />


    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import Tracklist from "../tracklist/Tracklist.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <div className="SearchBar">
        <form>
          <input type="text" />
        </form>
      </div>
      <button className="search_song">Search Song</button>
      <Tracklist />
    </div>
  );
}

export default App;

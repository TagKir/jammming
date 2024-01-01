import "./App.css";
import React, { useState } from "react";
import SearchBar from "../search_bar/SearchBar.js";
import SearchResults from "../search_results/SearchResults.js";
import Tracklist from "../tracklist/Tracklist.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>

      <SearchBar />
      <SearchResults />

      <Tracklist />
    </div>
  );
}

export default App;

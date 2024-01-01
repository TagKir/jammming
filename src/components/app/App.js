import "./App.css";
import React from "react";
import SearchBar from "../search_bar/SearchBar.js";
import SearchResults from "../search_results/SearchResults.js";

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

      <div className="all"></div>
    </div>
  );
}

export default App;

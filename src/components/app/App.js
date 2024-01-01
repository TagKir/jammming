import "./App.css";
import React from "react";
import SearchBar from "../search_bar/SearchBar.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>

      <SearchBar />
      <button className="search_song">Search Song</button>
    </div>
  );
}

export default App;

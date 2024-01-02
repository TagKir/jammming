import "./App.css";
import React, { useState } from "react";
import Tracklist from "../tracklist/Tracklist.js";

function App() {
  const client_id = "42774e0a12cd44d189d0dcbc18318dc2"; // Замените на ваш Client ID
  const client_secret = "c5247a3ecd044f8dbd75fb84bb261b3f"; // Замените на ваш Client Secret

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

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tracklist from "../tracklist/Tracklist.js";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState({});
  function searchHandler(e) {
    setSearch(e.target.value);
  }

  const CLIENT_ID = "42774e0a12cd44d189d0dcbc18318dc2";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // search
  async function searchButtonHandler() {
    await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURI(
        search
      )}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
  }

  return !token ? (
    <div className="unLogged">
      <h1>Welcome to JAMMMING.</h1>
      <h2>
        Here you can find the music you need and save it to your Spotify
        playlist. Please login to your account before using.
      </h2>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  ) : (
    <div className="App">
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <form className="SearchBar">
        <div>
          <input type="text" value={search} onChange={searchHandler} required />
        </div>
        <button
          className="search_song"
          onClick={search ? searchButtonHandler : null}
        >
          Search Song
        </button>
      </form>

      <Tracklist props={searchResults} />
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default App;

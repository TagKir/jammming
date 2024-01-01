import "./Tracklist.css";
import React, { useState } from "react";

export default function Tracklist() {
  let cards = ["Hell of the Book"];
  return (
    <div className="all">
      <div className="tracks">
        <h2>Result</h2>
        <ul>
          {cards.map((card) => (
            <li>{card}</li>
          ))}
        </ul>
      </div>
      <div className="chosen">
        <input className="playlist_name_input" />
        <ul>
          {cards.map((card) => (
            <li>{card}</li>
          ))}
        </ul>
        <button className="save">SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
}

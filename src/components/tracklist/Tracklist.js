import "./Tracklist.css";
import React, { useState } from "react";

export default function Tracklist() {
  let cards = ["Hell of the Book"];
  return (
    <div className="all">
      <div className="tracks">
        <h2 className="result">Result</h2>
        <ul>
          {cards.map((card) => (
            <li>{card}</li>
          ))}
        </ul>
      </div>
      <div className="chosen"></div>
    </div>
  );
}

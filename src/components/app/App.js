import "./App.css";
import React, { useState } from "react";
import Tracklist from "../tracklist/Tracklist.js";
import AccessToken from "../AccessToken.js";

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
      <AccessToken />
    </div>
  );
} // http://localhost:3000/#access_token=BQBr9gbk7oi4U9WXLBsgleGy0vBuMEhyGDaX0bnhgw21wIRg2ZL_0_Pxr0sxLmWusNmu0OWmgSuszZZgjYextvxXscIc1sNCwBrikQsCNIvcEqm9mZDtcl4xulG8a6sOmlpKYJBF623I_-JBxC_8SIQpVO-KWpYsDtzqb2-zYslCKIoPWCm5CxFnPymVIqaCqpkorbqPe0sYuI3GY9k&token_type=Bearer&expires_in=3600&state=qQ21JPJDiqZbE6Ce

export default App;

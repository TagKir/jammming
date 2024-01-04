import "./SendButton.css";
import React, { useEffect, useState } from "react";

export default function SendButton(props) {
  const [input, setInput] = useState("");
  const [saveUris, setSaveUris] = useState([]);

  function inputHandler(e) {
    setInput(e.target.value);
  }

  async function CreatePlaylist(e) {
    e.preventDefault();
    const mass = Object.values(saveUris);

    const accessToken = props.token;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let userId;

    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: `${input}` }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: mass }),
              }
            );
          });
      });
  }
  async function refreshToken() {
    const refreshToken = localStorage.getItem("refresh_token");
    const url = "https://accounts.spotify.com/api/token";

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    };
    const body = await fetch(url, payload).then((response) => {
      localStorage.setItem("access_token", response.accessToken);
      localStorage.setItem("refresh_token", response.refreshToken);
    });
  }

  useEffect(() => {
    if (props.props[0]) {
      setSaveUris(props.props.map((track) => track.uri));
    }
  }, [props.props]);
  return (
    <form>
      <input
        className="playlist_name_input"
        onChange={inputHandler}
        placeholder="Best playlist"
        required
      />
      <button className="save" onClick={(CreatePlaylist, refreshToken)}>
        SAVE TO SPOTIFY
      </button>
    </form>
  );
}

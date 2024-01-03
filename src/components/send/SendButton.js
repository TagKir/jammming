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
      <button className="save" onClick={CreatePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </form>
  );
}

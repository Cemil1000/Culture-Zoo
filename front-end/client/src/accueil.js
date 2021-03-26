import React, { useState } from "react";
import Axios from "axios";

import "./App.css";

function Accueil() {
  const [usernameReg, setUsernameReg] = useState("");

  const test = () => {
    Axios.post("http://localhost:8070/api/v1/members", {
      name: usernameReg,
    }).then((response) => {
        if (response.data.status === "success") {
            console.log("ok");
            window.location.pathname = '/allPlayers'
        }
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Name in game</h1>
        <label>-----></label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <button onClick={test}>Register</button>
      </div>
    </div>
  );
}

export default Accueil;

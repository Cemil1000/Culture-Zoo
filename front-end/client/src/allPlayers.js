import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./App.css";

function AllPlayers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8070/api/v1/members").then((response) => {
      console.log(response.data.result);
      setUsers(response.data.result);
    });
  }, []);

  return (
    <div className="App">
        <h1>Les autres gamer</h1>
        {users.map((val) => {
            return <h2>User: {val.name} </h2>;
        })}
    </div>
  );
}

export default AllPlayers;

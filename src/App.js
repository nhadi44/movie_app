import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/550/lists`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Movie Lists</h1>
      </div>
    </div>
  );
}

export default App;

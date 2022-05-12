import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/550/lists`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Movie Lists</h1>
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <h2>{movie.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

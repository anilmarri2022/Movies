import React, { useEffect, useState } from "react";
import Main from "../Components/Main";
const TopRated = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=iron man&apikey=62e54a34")
      .then((response) => response.json())
      .then((json) => setData(json.Search));
  });
 
  return (
    <div>
      <div>
        <Main />
      </div>
    <div className="row">
    {data.map((movie) => (
          <div className="col-md-3">
            <div class="cards" style={{ width: "18rem" }}>
              <img src={movie.Poster} class="card-img-top" alt={movie.Title} />
              <div class="cards__overlay">
                <h5 class="card__title">{movie.Title}</h5>\
                <div className="card__rating">{movie.imdbID}</div>
                <div className="card__runtime">{movie.Year}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    
  );
};

export default  TopRated;

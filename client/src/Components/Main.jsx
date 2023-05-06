import React, { useState } from "react";
import Home from '../Pages/Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchHandler = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=62e54a34`)
      .then((res) => res.json())
      .then((value) => setData(value.Search));
  };

  const download = (url) => {
    fetch(url)
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Movies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href={Home}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search" onSubmit={searchHandler}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
      <div className="row">
        {data.map((movie) => (
          <div className="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={movie.Poster} class="card-img-top" alt={movie.Title} />
              <div class="card-body">
                <h5 class="card-title">{movie.Title}</h5>
                <a
                  className="btn btn-primary"
                  onClick={() => download(movie.Poster)}
                >
                  Download Poster
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

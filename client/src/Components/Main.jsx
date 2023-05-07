import React, { useState } from "react";
import "./Main.css";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Netflixlogo from "../../src/images/Netflixlogo.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Main = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchHandler = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=62e54a34`)
      .then((res) => res.json())
      .then((value) => setData(value.Search));
  };

  return (
    <div>
      <Navbar className="navbar expand-lg navbar-dark   header" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image className="header__icon" src={Netflixlogo} alt="img" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/movies/popular" style={{textDecoration:"none"}}>
                <span>Popular</span>
              </Link>
              <Link to="/movies/top_rated" style={{textDecoration:"none"}}>
                <span>Top Rated</span>
              </Link>
              <Link to="/movies/upcoming" style={{textDecoration:"none"}}>
                <span>Upcoming</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
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
      </Navbar>

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

export default Main;

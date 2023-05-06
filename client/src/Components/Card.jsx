import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import poster from "../images/poster.jpg";
import "./style.css";


const Card = () => {
  return (
    <div className="card-container">
      <div class="card " style={{ width: "18rem" }}>
        <img src={poster} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

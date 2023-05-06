import React, { useEffect, useState } from "react";
import Main from "../Components/Main";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=titanic&apikey=62e54a34")
      .then((response) => response.json())
      .then((json) => setData(json.Search));
  });
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
      <div>
        <Main />
      </div>
    <div className="row">
      {data.map((item) => (
        <div className="col-md-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src={item.Poster} class="card-img-top" alt={item.Title} />
            <div class="card-body">
              <h5 class="card-title">{item.Title}</h5>
              <a
                className="btn btn-primary"
                onClick={() => download(item.Poster)}
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

export default Home;

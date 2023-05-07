import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Popular from "./Components/Popular";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/popular" element={<Popular />} />
        <Route path="movies/top_rated" element={<TopRated />} />
        <Route path="/movies/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

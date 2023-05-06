import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
         <Route path="/" element={< Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

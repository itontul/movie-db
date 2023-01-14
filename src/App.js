import "./App.css";
import { useGlobalContext } from "./context";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

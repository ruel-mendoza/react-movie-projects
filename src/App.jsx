import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NowPlaying from "./pages/Nowplaying";
import UpComing from "./pages/UpComing";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

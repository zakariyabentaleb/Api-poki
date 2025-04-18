import { Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
// import Navbar from "./components/NavBar";
// import NavBar from "";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />

      </Routes>
    </>
  );
}

export default App;

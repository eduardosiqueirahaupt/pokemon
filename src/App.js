import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import './App.css'

function App() {
  const initPokemonsFav = () => {
    if (!localStorage.getItem("FavPokemons")) {
      localStorage.setItem("FavPokemons", JSON.stringify([]))
    }
  }

  useEffect(() => {
    initPokemonsFav()
  }, [])

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favorites" exact element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

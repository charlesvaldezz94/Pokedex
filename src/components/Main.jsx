import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, SinglePokemon } from "./";

const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokedex = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokedex();
  }, [url]);

  return (
    <Router>
      <div id="main">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pokemonData={pokemonData}
                setPokemonData={setPokemonData}
                loading={loading}
                prevUrl={prevUrl}
                nextUrl={nextUrl}
                setUrl={setUrl}
                url={url}

              />
            }
          />
          <Route path="/pokemon" element={<SinglePokemon />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;

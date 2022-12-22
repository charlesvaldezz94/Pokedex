import React from "react"
import Icons from "./Icons";
import SinglePokemon from "./SinglePokemon";

const Home = (props) => {
  const pokemonData = props.pokemonData
  const loading = props.loading

  return (
  <div>
    <h1> Pokedex </h1>
    <div className="homeIcons">
      <Icons pokemonData={pokemonData} loading={loading} />
      <SinglePokemon />
    </div>
  </div>
    )
};

export default Home;

import React, { useState } from "react";
import Popup from "reactjs-popup";
import Icons from "./Icons";
import SinglePokemon from "./SinglePokemon";

const Home = (props) => {
  const pokemonData = props.pokemonData;
  const setPokemonData = props.setPokemonData;
  const loading = props.loading;
  const prevUrl = props.prevUrl;
  const nextUrl = props.nextUrl;
  const setUrl = props.setUrl;
  const url = props.url;
  const [pokeDexData, setPokeDexData] = useState();
  const [dexEntry, setDexEntry] = useState(false);

  const previousButton = () => {
    setUrl(prevUrl);
  };

  const nextButton = () => {
    setUrl(nextUrl);
  };

  return (
    <div>
      <h1 className="pokedex"> Pokedex </h1>
      <div className="homeIcons">
        <Icons
          pokemonData={pokemonData}
          loading={loading}
          dexEntry={dexEntry}
          setDexEntry={setDexEntry}
          pokemonInfo={(singlePoke) => setPokeDexData(singlePoke)}
        />
      </div>
      <div className="buttons">
        <span>
          <button className="button" onClick={previousButton}>
            Previous
          </button>
        </span>
        <span>
          <button className="button" onClick={nextButton}>
            Next
          </button>
        </span>
      </div>
      <Popup open={dexEntry}>
        <div className="popup">
          <SinglePokemon pokeDexData={pokeDexData} />
        </div>
      </Popup>
    </div>
  );
};

export default Home;

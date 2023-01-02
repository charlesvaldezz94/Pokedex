import React from "react";

const SinglePokemon = (props) => {
  const pokeDexData = props.pokeDexData;
  // console.log(pokeDexData, "fetchresults");

  return (
    <>
      {!pokeDexData ? (
        ""
      ) : (
        <div className="dexEntry">
          <h1> {pokeDexData.name} </h1>
          <img
            id="pokedexPic"
            src={pokeDexData.sprites.front_default}
            alt="pokemonPic"
          />
          <div className="abilitiesAll">
            {pokeDexData.abilities.map((ability) => {
              return (
                <div className="abilities" key={ability.id}>
                  <h2> {ability.ability.name} </h2>
                </div>
              );
            })}
          </div>
          <div className="Stats">
            <h2> Stats: </h2>
            <div>
              {pokeDexData.stats.map((item) => {
                return (
                  <div key={item.id}>
                    <h3> {item.stat.name} : {item.base_stat} </h3>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePokemon;

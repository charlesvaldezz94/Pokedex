import React from "react";

const Icons = (props) => {
    const pokemonData = props.pokemonData
    const loading = props.loading
    console.log(pokemonData, loading, 'icon')

  return (
    <div className="iconsContainer">
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemonData.map((element) => {
          return (
            <div className="icons">
              <h2> {element.id} </h2>
              <img src="{item.sprites.front_default" alt="" />
              <h2> Pokemon Name </h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Icons;

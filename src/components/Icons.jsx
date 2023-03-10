import React from "react";

const Icons = (props) => {
  const pokemonData = props.pokemonData;
  const loading = props.loading;
  const pokemonInfo = props.pokemonInfo
  const setDexEntry = props.setDexEntry
  const dexEntry = props.dexEntry

  const popupTrigger = () => {
    if(dexEntry === false) {
     setDexEntry(true) 
    }
    else {
      setDexEntry(false)
    }
  }

  return (
    <div className="iconsContainer" onClick={popupTrigger}>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemonData.map((item) => {
          return (
            <div className="icons" key={item.id} onClick={()=>pokemonInfo(item)}>
              <h2 id="pokeID"> {item.id} </h2>
              <img id="pokeProfile" src={item.sprites.front_default} alt="" />
              <h2 id="pokeName"> {item.species.name} </h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Icons;

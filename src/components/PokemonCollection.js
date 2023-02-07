import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {list, search}) {

  const filteredList = list.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <Card.Group itemsPerRow={6}>
      {filteredList.map(pokemon => {
        return <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          hp={pokemon.hp}
          sprites={pokemon.sprites}
          />
      })} 
    </Card.Group>
  );
}

export default PokemonCollection;

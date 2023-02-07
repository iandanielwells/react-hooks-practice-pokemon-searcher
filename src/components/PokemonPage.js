import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [list, setList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setList(data))
  }, [])

  function addNewPokemon(newPokemon) {
    setList(prev => [...prev, newPokemon])
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addNewPokemon} />
      <br />
      <Search
        search={search}
        setSearch={setSearch} />
      <br />
      <PokemonCollection
        list={list}
        setList={setList} 
        search={search}/>
    </Container>
  );
}

export default PokemonPage;

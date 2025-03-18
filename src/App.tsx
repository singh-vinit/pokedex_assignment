import { useEffect, useState } from "react";
import { PokemonList } from "./types";
import PokemonSection from "./PokemonSect";

function App() {
  const [result, setResult] = useState<PokemonList | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon"
        );
        const data: PokemonList = await response.json();
        setResult(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <>
      <div className="text-red-500 ">hello world</div>
      <PokemonSection pokemonList={result} />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { PokemonList } from "./types";
import PokemonSection from "./PokemonSect";

function App() {
  const [result, setResult] = useState<PokemonList | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data: PokemonList = await response.json();
        setResult(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="sticky top-0 z-10 bg-indigo-700 p-2">
        <h1 className="font-extrabold text-2xl text-yellow-400">pokedex</h1>
      </div>
      <div className="p-4">
        <PokemonSection pokemonList={result} />
      </div>
    </>
  );
}

export default App;

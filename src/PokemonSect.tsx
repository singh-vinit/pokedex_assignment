import { PokemonList } from "./types";
import { useEffect, useState } from "react";
import { Pokemon } from "./types";
import PokemonCard from "./PokemonCard";

interface Prop {
  pokemonList: PokemonList | null;
}

export default function PokemonSection({ pokemonList }: Prop) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(pokemonList);
  const fetchData = async () => {
    try {
      if (!pokemonList) return;
      const responses = await Promise.all(
        pokemonList.results.map((res) => fetch(res.url))
      );
      console.log("responses", responses);
      const data = await Promise.all(responses.map((res) => res.json()));
      return data; // Returns an array of responses
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      if (data) {
        setPokemons(data);
      }
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other["official-artwork"].front_default}
          types={pokemon.types}
          stats={pokemon.stats}
          moves={pokemon.moves}
        />
      ))}
    </div>
  );
}

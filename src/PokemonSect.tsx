import { PokemonList } from "./types";
import { useEffect, useState } from "react";
import { Pokemon } from "./types";

interface Prop {
  pokemonList: PokemonList | null;
}

export default function PokemonSection({ pokemonList }: Prop) {
  const [length, setLength] = useState(0);
  const pokemons: Pokemon[] = [];
  useEffect(() => {
    async function fetchEachPokemon() {
      pokemonList?.results.forEach(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data: Pokemon = await response.json();
        pokemons.push(data);
        setLength((prev) => prev + 1);
      });
    }
    fetchEachPokemon();
  });

  if (length < 20) return <div>loading...</div>;
  if (length === 20) console.log(pokemons);

  return <div>pokemon section</div>;
}

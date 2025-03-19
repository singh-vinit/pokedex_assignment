type obj = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: obj[];
};

export type typeObj = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type statsObj = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type abilityObj = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type moveObj = {
  move: {
    name: string;
    url: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  types: typeObj[];
  stats: statsObj[];
  abilities: abilityObj[];
  moves: moveObj[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

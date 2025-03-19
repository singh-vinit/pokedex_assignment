const typeColors = {
  fire: "from-orange-400 to-red-600",
  water: "from-blue-400 to-blue-600",
  grass: "from-green-400 to-green-600",
  bug: "from-emerald-400 to-emerald-600",
  normal: "from-teal-400 to-teal-600",
};

import Stats from "./Stats";
import { statsObj } from "./types";
import { moveObj } from "./types";
import { typeObj } from "./types";

interface Props {
  name: string;
  image: string;
  types: typeObj[];
  stats: statsObj[];
  moves: moveObj[];
}

export default function PokemonCard({
  name,
  image,
  types,
  stats,
  moves,
}: Props) {
  const type = types[0].type.name as keyof typeof typeColors;
  return (
    <div className="w-[360px] shadow-2xl rounded-lg overflow-hidden border-4 border-yellow-400">
      <div className={`bg-gradient-to-r ${typeColors[type]} p-2`}>
        <img
          src={image}
          className="w-28 h-28 mx-auto rounded-full border-2 border-yellow-500"
        />
        <p className="text-center font-bold text-white text-lg">{name}</p>
        <div className="flex justify-center items-center gap-x-2">
          {types.map((type) => (
            <span className="bg-white/10 backdrop-blur-lg border px-4 py-1 rounded-2xl shadow-lg text-sm text-white font-bold">
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="p-2">
        <p className="text-xl font-medium text-gray-800 capitalize">stats</p>
        <div className="bg-gray-600 h-[1px] w-full"></div>
        {stats.map((stat) => (
          <Stats
            key={stat.stat.name}
            name={stat.stat.name}
            value={stat.base_stat}
          />
        ))}
        <p className="text-xl font-medium text-gray-800 capitalize mb-1">
          moves
        </p>
        {moves.slice(0, 3).map((move) => (
          <div
            key={move.move.name}
            className={`bg-gray-500/50 backdrop-blur-lg mb-2 rounded-md p-1`}
          >
            <span className="uppercase text-[15px] font-light text-gray-800">
              {move.move.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

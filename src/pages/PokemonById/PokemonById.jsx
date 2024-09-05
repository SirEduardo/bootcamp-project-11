import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const PokemonById = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const types = data.types
          .map((type) => {
            const typeName = type.type.name;
            return typeName.charAt(0).toUpperCase() + typeName.slice(1);
          })
          .join(", ");

        setPokemon({
          name: data.name,
          id: data.id,
          img: data.sprites.other["official-artwork"].front_default,
          types: types,
        });
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [id]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-3 bg-lime-400 max-lg:justify-start max-lg:pt-20">
      <div>
        {pokemon && (
          <Cards
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.img}
            types={pokemon.types}
          />
        )}
      </div>
    </main>
  );
};

export default PokemonById;

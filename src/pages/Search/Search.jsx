import { useState } from "react";
import Cards from "../../components/Cards/Cards";

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      console.log(data);

      setPokemon({
        name: data.name,
        img: data.sprites.other["official-artwork"].front_default,
        id: data.id,
      });
    } catch (error) {
      setError(error.message);
      setPokemon(null);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-lime-400">
      <form onClick={handleSearch}>
        <input
          className="py-2 px-14 mt-10 rounded-lg mr-5 text-center"
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-500 py-2 px-5 text-white rounded-lg"
          type="submit"
        >
          Search
        </button>
      </form>
      {pokemon && (
        <Cards
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          img={pokemon.img}
        />
      )}
      {error && <div className="mt-10 text-red-500 text-lg">{error}</div>}
    </main>
  );
};

export default Search;

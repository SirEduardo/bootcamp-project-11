import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      setPokemon(null);
      setError("");
      return;
    }

    const timer = setTimeout(async () => {
      setError("");
      setLoading(true);
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`
        );
        if (!response.ok) {
          throw new Error("Pokemon not found");
        }
        const data = await response.json();

        setPokemon({
          name: data.name,
          img: data.sprites.other["official-artwork"].front_default,
          id: data.id,
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setPokemon(null);
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <main className="min-h-screen flex flex-col items-center pt-32 gap-20 bg-lime-400 max-lg:gap-28 max-lg:justify-start">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="py-2 px-14 mt-10 rounded-lg mr-5 text-center max-lg:px-8 max-lg:mt-20"
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-500 py-2 px-5 text-white rounded-lg"
          type="submit"
        >
          Search
        </button>
      </form>
      {loading && <Loading />}
      {pokemon && (
        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
          <Cards
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.img}
          />
        </Link>
      )}
      {search && error && (
        <div className="mt-10 text-red-500 text-lg">{error}</div>
      )}
    </main>
  );
};

export default Search;

import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Buttons from "../../components/Buttons/Buttons";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getEvolutions = async (id) => {
    setLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();

    const extractEvoData = async (species) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${species.name}`
      );
      const pokemonData = await response.json();
      return {
        name: species.name,
        img: pokemonData.sprites.other["official-artwork"].front_default,
        id: pokemonData.id,
      };
    };
    const evolutions = [];

    evolutions.push(await extractEvoData(data.chain.species));

    if (data.chain.evolves_to.length > 0) {
      evolutions.push(await extractEvoData(data.chain.evolves_to[0].species));
    }
    if (data.chain.evolves_to[0].evolves_to.length > 0) {
      evolutions.push(
        await extractEvoData(data.chain.evolves_to[0].evolves_to[0].species)
      );
    }
    setPokemon(evolutions);
    setLoading(false);
  };

  useEffect(() => {
    getEvolutions(page);
  }, [page]);

  const prevClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextClick = () => {
    setPage(page + 1);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-lime-400 ">
      <div>
        <div className="flex">
          {pokemon.map((p) => (
            <Link key={p.id} to={`/pokemon/${p.id}`}>
              <Cards key={p.id} name={p.name} id={p.id} img={p.img} />
            </Link>
          ))}
        </div>

        <div className="flex justify-evenly mt-10 w-full">
          <Buttons icon={<TiArrowLeftOutline />} handleClick={prevClick} />
          {loading && <Loading />}
          <Buttons icon={<TiArrowRightOutline />} handleClick={nextClick} />
        </div>
      </div>
    </main>
  );
};

export default Home;

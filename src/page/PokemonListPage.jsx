import PokemoneCard from 'components/PokemonCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  featchPokemon,
  featchPokemonDetails,
} from 'redux/pokemon/pokemon.operation';
import { selectPoremon } from 'redux/pokemon/pokemon.selector';

export default function PokemonListPage() {
  const dispatch = useDispatch();
  const [isPokemondetails, setIsPokemonDetails] = useState(false);

  const pokemons = useSelector(selectPoremon);

  const handleFeatchPokemon = () => {
    dispatch(featchPokemon());
  };
  const handleFeatchPokemonDetails = () => {
    pokemons.map(pokemon => dispatch(featchPokemonDetails(pokemon.name)));
  };
  useEffect(() => {
    if (pokemons.length !== 0) {
      setIsPokemonDetails(true);
    }
  }, [pokemons]);

  return (
    <div>
      <button type="button" onClick={handleFeatchPokemon}>
        click
      </button>
      <button type="button" onClick={handleFeatchPokemonDetails}>
        click
      </button>
      {pokemons && (
        <ul>
          {pokemons.map(pokemon => {
            return (
              <PokemoneCard
                key={pokemon.name}
                pokemon={pokemon}
                isPokemon={isPokemondetails}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

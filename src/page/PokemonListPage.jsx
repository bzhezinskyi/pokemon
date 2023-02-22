import PokemoneCard from 'components/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { featchPokemon } from 'redux/pokemon/pokemon.operation';
import {
  selectPoremon,
  selectPoremonDetails,
} from 'redux/pokemon/pokemon.selector';

export default function PokemonListPage() {
  const isPokemon = useSelector(selectPoremonDetails);
  const pokemons = useSelector(selectPoremon);
  console.log('pokemons:', pokemons);
  const dispatch = useDispatch();

  const handleFeatchPokemon = () => {
    dispatch(featchPokemon());
  };

  return (
    <div>
      <button type="button" onClick={handleFeatchPokemon}>
        click
      </button>
      {pokemons && isPokemon && (
        <ul>
          {pokemons.map(pokemon => {
            return <PokemoneCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </ul>
      )}
    </div>
  );
}

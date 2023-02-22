import { useDispatch, useSelector } from 'react-redux';
import { featchPokemon } from 'redux/pokemon/pokemon.operation';
import { selectPoremon } from 'redux/pokemon/pokemon.selector';

export default function PokemonListPage() {
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
      {pokemons && (
        <ul>
          {pokemons.map(({ name }) => {
            return (
              <li key={name}>
                <b>{name}</b>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

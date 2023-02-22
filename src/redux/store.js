import { configureStore } from '@reduxjs/toolkit';
import { pokemonReduser } from './pokemon/pokemon.slise';

export const store = configureStore({ reducer: { pokemon: pokemonReduser } });

import { featchPokemon, featchPokemonDetails } from './pokemon.operation';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: { results: [] },
    isLoading: false,
    error: null,
    isPokemonDetails: false,
  },
  extraReducers: builder =>
    builder
      .addCase(featchPokemon.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isPokemonDetails = true;
      })
      .addCase(featchPokemonDetails.fulfilled, (state, { payload }) => {
        const idx = state.data.results.findIndex(
          pokemon => pokemon.name === payload.name
        );
        state.data.results[idx] = payload;
      })
      .addMatcher(
        isAnyOf(featchPokemon.pending, featchPokemonDetails.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(featchPokemon.fulfilled, featchPokemonDetails.fulfilled),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(featchPokemon.rejected, featchPokemonDetails.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.isPokemonDetails = false;
        }
      ),
});
export const pokemonReduser = pokemonSlice.reducer;

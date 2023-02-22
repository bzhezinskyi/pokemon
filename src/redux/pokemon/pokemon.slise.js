import { featchPokemon, featchPokemonDetails } from './pokemon.operation';

const { createSlice } = require('@reduxjs/toolkit');

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { data: {}, isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(featchPokemon.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(featchPokemonDetails.fulfilled, (state, { payload }) => {})
      .addMatcher(featchPokemon.pending, state => {
        state.isLoading = true;
      })
      .addMatcher(featchPokemon.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(featchPokemon.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});
export const pokemonReduser = pokemonSlice.reducer;

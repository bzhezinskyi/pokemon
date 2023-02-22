import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const pokemonAPI = axios.create({ baseURL: 'https://pokeapi.co/api/v2' });

export const featchPokemon = createAsyncThunk(
  'pokemon/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await pokemonAPI.get('/pokemon?limit=5');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const featchPokemonDetails = createAsyncThunk(
  'pokemon/details',
  async (name, thunkAPI) => {
    try {
      const { data } = await pokemonAPI.get(`/pokemon/${name}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

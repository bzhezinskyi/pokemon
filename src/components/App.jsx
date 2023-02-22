import HomePage from 'page/HomePage';
import PokemonListPage from 'page/PokemonListPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonListPage />} />
      </Route>
    </Routes>
  );
};

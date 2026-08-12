import './App.css'
import { fetchPokemon } from './services/pokeapi'
import { useEffect, useState } from 'react'
import PokemonList from './components/PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPokemons () {
      try {
        setIsLoading(true);
        const data = await fetchPokemon();
        setPokemons(data);
      } catch (err){
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadPokemons();
  }, []);

  if (isLoading) return <p className="status-message">Loading Pokédex...</p>;
  if (error) return <p className="status-message error">Error: {error}</p>;

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App

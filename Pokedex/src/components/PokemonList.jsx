import PokemonCard from "./PokemonCard";

function PokemonList({pokemons}){
    return(
        <div>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon = {pokemon} />
            ))}
        </div>
    );
}

export default PokemonList;
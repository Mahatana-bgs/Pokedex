const listAPI = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

export async function fetchPokemon(){
    const listResponse = await fetch('${listAPI}/pokemon?limit=100&offset=0');
    if(!listResponse.ok){
        throw new Error("Failed to fetch the Pokemon list");
    }

    const listData = await listResponse.json();

    const detailedPokemons = await Promise.all(
        listData.results.map((pokemon) =>
            fetch(pokemon.url).then((response)=> response.json())
        )
    );
    return detailedPokemons;
}
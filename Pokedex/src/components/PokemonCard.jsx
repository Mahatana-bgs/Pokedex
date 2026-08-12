function PokemonCard ({pokemon}){
    const {name, id, sprites, types} = pokemon;

    return(
        <div className = "pokemon-card">
            <span className = "pokemon-id">#{String(id).padStart(3, "0")}</span>
            <img src={sprites.front_default} alt={name} />
            <h3 className = "pokemon-name">{name}</h3>
            <div className = "pokemon-types">
                {types.map((t) => (
                    <span key={t.type.name} className={`type-badge type-${t.type.name}`}>
                        {t.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default PokemonCard
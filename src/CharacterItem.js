
function CharacterItem({character}){
    return(
        <div className="character-item">
            <div id="character-names">{character.name}</div>  
            <img src={character.image} />

        </div>
    )
}

export default CharacterItem;
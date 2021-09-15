import React, {useEffect, useState} from "react";
import CharacterItem from "./CharacterItem"


function GetCharacters(){

   const [characterDisplay, setCharacterDisplay] = useState([])

   useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((r) => r.json())
      .then(data => setCharacterDisplay(data));
}, [])
   
    return(
        <div>
            <h2>The Office Characters</h2>
            <ul>
            {characterDisplay.map((character) => <CharacterItem character={character} />)}
            </ul>
        </div>
        )
}





export default GetCharacters;
import React, {useEffect} from "react";
import CharacterItems from "./CharacterItems"


function GetCharacters({setPage}){

    useEffect(() => {
        fetch("http://localhost:3000/characters")
          .then((r) => r.json())
          .then(data => setPage(data));
    }, [])

    const CharacterList = characters.map((character) => <CharacterItems /> )

    return(
        <div>
            <h2>The Office Characters</h2>
            <ul>
                {CharacterList}
            </ul>
        </div>
        )
}





export default GetCharacters;
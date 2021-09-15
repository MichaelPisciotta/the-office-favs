import React, {useEffect, useState} from "react";
import MemeItem from "./MemeItem"

function GetMemes(){

    const [meme, setMeme] = useState([])

    useEffect(() => {
     fetch("http://localhost:3000/memes")
       .then((r) => r.json())
       .then(data => setMeme(data));
 }, [])

    return(
        <div>
        <h2>The Office Memes</h2>
        <ul>
        {meme.map((meme) => <MemeItem meme={ meme} />)}     
        </ul>
        </div>
    )
}

export default GetMemes;
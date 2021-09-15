import React, {useEffect, useState} from "react";


function AddFavorites({addFav}){
    const [name, setName] = useState("Enter Character")
    const [image, setImage] = useState("Enter URL")


    function handleSubmit(e) {
        e.preventDefault()
        const favoriteObj = { 
             
                name: name, 
                image: image
        }
        fetch("http://localhost:3000/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favoriteObj)
        })
            .then(r => r.json())
            .then(data => addFav(data))
    };


    return(
        <form onSubmit={handleSubmit}>  
        <h2>Add New Favorites!</h2>

        <label htmlFor="Character">Character:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

       
        <label htmlFor="image"> Image</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />  

        <button type="submit">Add Favorite</button>
    </form>
    )
}


export default AddFavorites;
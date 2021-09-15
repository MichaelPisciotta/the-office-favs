import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom"; 
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import GetCharacters from "./GetCharacters";
import GetMemes from "./GetMemes";
import AddFavorites from "./AddFavorites"
import FavoriteList from "./FavoriteList"

function OfficeContainer(){
const [favorites, setFavorites] = useState([])


useEffect(() => {
    fetch("http://localhost:3000/favorites")
      .then((r) => r.json())
      .then(data => setFavorites(data));
}, [])


function addFav(newFav){
    const updatedFavorites = [...favorites, newFav]
    setFavorites(updatedFavorites);

 }


    return(
        <Router>
        <NavBar />
             <Switch>
                 <Route exact path="/characters">
                     <GetCharacters  />
                 </Route>
                 <Route exact path="/memes">
                     <GetMemes  />
                 </Route>
                 <Route exact path="/favorites/new">
                     <AddFavorites addFav={addFav} />
                 </Route>
                 <Route exact path="/favorites">
                     <FavoriteList favorites={favorites} />
                 </Route>
                 <Route path="*">
                    <h1>404 not found</h1>
                </Route>
             </Switch>
       </Router>
    )
}





export default OfficeContainer; 


//favorites container and characters/memes container
//rename getcharacters and getmemes
//practice iterating over  arrays of objects
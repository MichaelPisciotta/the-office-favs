import FavoriteItem from "./FavoriteItem"

function FavoriteList({favorites}){
    return(
        <div>
            <h2>My Favorites</h2>
            <ul>
          {favorites.map((favorite) => <FavoriteItem favorites={favorites}  />)}
            </ul>
        </div>
    )
}


export default FavoriteList;
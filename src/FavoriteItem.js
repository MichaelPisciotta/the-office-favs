
function FavoriteItem({favorite}){
    
    return(
            <li>
            {favorite.name}
            <br></br>
            <img src={favorite.image} />
            </li>  
    )
}


export default FavoriteItem;
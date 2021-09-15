
function FavoriteItem({favorite}){
    return(
        <div>
            <li>
            {favorite.name}
            <br></br>
            <img src={favorite.image} />
            </li>  
        </div>
    )
}


export default FavoriteItem;
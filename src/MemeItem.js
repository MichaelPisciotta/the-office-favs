
function MemeItem({meme}){
    return(
        <div className="character-item">

            <div id="character-names">{meme.name}</div>  
            <img src={meme.image} />
            <br></br>
            <br></br>


        </div>
    )
}

export default MemeItem;

import React, { useState } from 'react'
function Navbar(){
    const [favorites,setFavorites] = useState(0)
    return(
        <nav>
            <div>
                
                <img alt="pokeapi-logo"
                className='navbar-img'
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"></img>
            </div>
            
        </nav>
    )
}
export default Navbar
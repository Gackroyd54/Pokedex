import React, { useState } from 'react'
import { SearchPokemon } from './api'
function SearchBar(){
    const [search,setSearch] = useState("")
    const [ pokemon,setPokemon] = useState("")

    const onSearchHandler= async (pokemon)=>{
        const result = await SearchPokemon(pokemon)
        //if(!result) return
        console.log("search:",result)
        setPokemon(result)
    
      }
    const onChangeHandler = (e)=>{
        
        //console.log("Ponkemon: ",e.target.value)
        setSearch(e.target.value)
    }
    const onButtonClickHandler =()=>{
        onSearchHandler(search)
        console.log("pokemon: ",pokemon)
        

    }
    return(
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input placeholder="Buscar pokemón" onChange={onChangeHandler}/>
                
            </div>
            <div className='searchbar-btn' >
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon?(
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <div>Tipo: {pokemon.types.map(t=><p key={pokemon.name}>{t.type.name}</p>)}</div>
                    <img src={pokemon.sprites.front_default} alt ={pokemon.name}/>
                </div>
            ):null}
        </div>
    )
}
export default SearchBar
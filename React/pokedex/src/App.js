import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { FavoriteProvider } from './components/Contexts/Favorites';
import SearchBar from './components/SearchBar';
import { SearchPokemon, getPokemonData, getPokemons } from './components/api';
import Pokedex from './components/Pokedex';
import React, { useEffect, useState } from 'react'
function App() {
  const [loading,setLoading] = useState(false)
  const [pokemons,setPokemons] = useState([])
  const [page,setPage] = useState(0)
  const [totalPages,setTotalPage] = useState(0)
  const [favorites,setFavorites] = useState(0)
  const itensPerPage = 27;




  const fetchPokemons= async ()=>{
    try{
      setLoading(true)
      const data = await getPokemons(itensPerPage,itensPerPage*page)
      const promises = data.results.map( async (pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPage(Math.ceil(data.count/itensPerPage))
      
      console.log(data)
    }catch(e){
      console.log("erro: ",e)
    }
    

  }
  useEffect(()=>{
    //console.log("carregou")
    fetchPokemons()
  },[page])
  const updateFavoritePokemons=(name)=>{
    const updatedFavoritePokemons = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex>=0){
      updatedFavoritePokemons.slice(favoriteIndex,1)

    }else{
      updatedFavoritePokemons.push(favoriteIndex)


    }
    setFavorites(updatedFavoritePokemons)
  }
  
  return (
    
    <div>
      <Navbar/>
    <SearchBar/>
    <Pokedex pokemons={pokemons} setPage={setPage} loading={loading} page={page} totalPages={totalPages}/>
      <div className='App'>
      
      </div>
      
    </div>
    
  );
}

export default App;

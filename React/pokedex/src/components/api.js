import axios from 'axios'
export async function SearchPokemon(pokemon){
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response =  await axios.get(url)
        //const response = await fetch(url)
        console.log(response)
        return await response.data
        //return await response.json()
    }catch(error){
        console.log(error)
        
    }

}
export async function getPokemons(limit=50,offset=0){
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response =  await axios.get(url)
        //const response = await fetch(url)
        console.log(response)
        return await response.data
        //return await response.json()
    }catch(error){
        console.log(error)
        
    }

}
export async function getPokemonData(url){
    try{
        const response =  await axios.get(url)
        //const response = await fetch(url)
        console.log(response)
        return await response.data
        //return await response.json()
    }catch(error){
        console.log(error)
        
    }

}
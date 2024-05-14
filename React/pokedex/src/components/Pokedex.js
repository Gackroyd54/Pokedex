import React from 'react'
import Pokemon from './Pokemon'
import Pagination from './Paginacao'
export default function Pokedex(props){
    const {pokemons,loading,page,totalPages,setPage} = props
    const onLeftClickHandler=()=>{
        if(page>0){
            setPage(page-1)
        }
    }
    const onRightClickHandler=()=>{
        if(page!==totalPages){
            setPage(page+1)
        }
    }
    return(
        <div>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <Pagination page={page+1} totalPages={totalPages+1} onLeftClick={onLeftClickHandler} onRightClick={onRightClickHandler}/>
                {loading?(
                <div>Carregando,segura fera...</div>)
                :
                (<div className='pokedex-grid'>
                    {pokemons && pokemons.map((pokemon,index)=>{
                        return(
                            <Pokemon key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>)}
            </div>
            
            
        </div>
    )
}
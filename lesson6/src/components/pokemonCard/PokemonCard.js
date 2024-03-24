import React, { useEffect, useState } from "react";
import classes from './PokemonCard.module.sass'
import noImg from '../../imgs/noImg.png'

const PokemonCard = ({ pokemonData }) => {
    const [pokemon, setPokemon] = useState({})
    const [pokemonImgUrl, setPokemonImgUrl] = useState(null)
    
    const getApi = async() => {
        try {
            const response = await fetch(pokemonData.url);
            const data = await response.json()
            setPokemon(data)
            setPokemonImgUrl(data?.sprites?.other.dream_world.front_default)
        } catch(e) {
            console.error('Error', e.message);
        }
    }
    const logStats = () => {
        console.log('-----------------------------------------------');
        console.log('>>>', pokemonData.name.toUpperCase(), '<<<');
        for(let i of pokemon.stats){
            console.log(`> ${i.stat.name} = ${i.base_stat}`);
        }
    }

    useEffect(() => {getApi()}, [])

    return(
        <div className={classes.pokemon_card} onClick={logStats}>
            <h1>{pokemonData.name}</h1>
            {pokemonImgUrl ? 
                <img src={pokemonImgUrl} alt={`${pokemonData.name}'s image`}/> :
                <img src={noImg} alt={`${pokemonData.name}'s image is undefined`}/>
            }
        </div>
    )
}

export default PokemonCard
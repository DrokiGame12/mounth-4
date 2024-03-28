import React, { useEffect, useState } from "react";
import classes from './PokemonCard.module.sass'
import noImg from '../../imgs/noImg.png'

const PokemonCard = ({ pokemonData, handleShow }) => {
    const [pokemon, setPokemon] = useState({})
    const [pokemonImgUrl, setPokemonImgUrl] = useState(null)
    
    const getApi = async() => {
        try {
            const response = await fetch(pokemonData.url);
            return await response.json()
        } catch(e) {
            console.error('Error', e.message);
        }
    }
    // const logStats = () => {
    //     console.log('-----------------------------------------------');
    //     console.log('>>>', pokemonData.name.toUpperCase(), '<<<');
    //     for(let i of pokemon.stats){
    //         console.log(`> ${i.stat.name} = ${i.base_stat}`);
    //     }
    // }

    useEffect(() => {
        getApi().then(pokemons => {
            setPokemon(pokemons)
            setPokemonImgUrl(pokemons?.sprites?.other.dream_world.front_default)
        })
    }, [])

    return(
        <div className={classes.pokemon_card}>
            <div>
                {pokemonImgUrl ?
                    <img src={pokemonImgUrl} alt={`${pokemonData.name}'s image`}/> :
                    <img src={noImg} alt={`${pokemonData.name}'s image is undefined`}/>
                }
                <h2>{pokemonData.name}</h2>
            </div>
            <button onClick={() => handleShow(pokemon)}>Подробнее</button>
        </div>
    )
}

export default PokemonCard
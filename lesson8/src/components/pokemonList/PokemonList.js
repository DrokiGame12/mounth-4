import React from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import classes from './PokemonList.module.sass'

const PokemonList = ({ pokemonList, handleShow }) => {
    return(
        <div className={classes.pokemon_list}>
            {pokemonList.map(pokemonData => <PokemonCard key={pokemonData.name} pokemonData={pokemonData} handleShow={handleShow}/>)}
        </div>
    )
}

export default PokemonList
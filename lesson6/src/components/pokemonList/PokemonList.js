import React from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import classes from './PokemonList.module.sass'

const PokemonList = ({ pokemonList }) => {
    return(
        <div className={classes.pokemon_list}>
            {pokemonList.map(pokemonData => <PokemonCard pokemonData={pokemonData}/>)}
        </div>
    )
}

export default PokemonList
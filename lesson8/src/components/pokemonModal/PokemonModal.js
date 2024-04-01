import React from "react";
import classes from "./PokemonModal.module.sass";
import closeImg from "../../imgs/close.svg";

const PokemonCard = ({ pokemon, handleShow }) => {

	const fromArray = (count, array) => {
		let newArray = []
		for(let i = 0; i < count; i++){
			newArray.push(array[i].move.name)
		}
		return newArray
	}

	return (
		<div className={classes.modal}>
			<div className={classes.block}>
				<button className={classes.close_button} onClick={handleShow}>
					<img src={closeImg} alt="close" />
				</button>
				<div className={classes.content}>
					<div className={classes.title}>
						<img
							src={pokemon?.sprites?.other.dream_world.front_default}
							alt={pokemon.abilities[0].ability.name}
						/>
						<h2>{pokemon.abilities[0].ability.name}</h2>
					</div>
					<div className={classes.list}>
						<p><b>Abilities:</b> {pokemon.abilities.map( item => item.ability.name ).join(', ') }</p>
						<p><b>Stats:</b> {pokemon.stats.map( item => item.stat.name ).join(', ') }</p>
						<p><b>Types:</b> {pokemon.types.map( item => item.type.name ).join(', ') }</p>
						<p><b>Some-moves:</b> { pokemon.moves.slice(0, 5).map( item => item.move.name ).join(', ') }</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;

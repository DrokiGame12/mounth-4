import React, { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import PokemonList from '../../components/pokemonList/PokemonList';
import PokemonModal from '../../components/pokemonModal/PokemonModal'
import loadingImg from '../../imgs/loading.gif'
import classes from './PokemonPage.module.sass'

const PokemonPage = () => {
	// List Data
	const [pokemonList, setPokemonList] =useState([])
	const [maxPokemon, setMaxPokemon] = useState(0)
	const [page, setPage] = useState(0)
	const [limit, setLimit] = useState(12)
	// Modal
	const [isLoading, setIsLoading] = useState(false)
	const [show, setShow] = useState(false)
	const [shownPokemon, setShownPokemon] = useState({})

	const getApi = async() => {
		setIsLoading(true)
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${limit*page}&limit=${limit}`);
			return await response.json()
		} catch(e) {
			console.error('Error', e.message);
		} finally {
			setIsLoading(false)
		}
	};

	const handleShow = (pokemon) => {
		setShow(!show)
		pokemon && setShownPokemon(pokemon)
	}

	const handlePrev = () => {
		if(page > 0){setPage(page-1)}
	}

	const handleNext = () => {
		if((page+1) * limit < maxPokemon){setPage(page+1)}
	}

	useEffect(() => {
		getApi().then(pokemons => {
			setPokemonList(pokemons.results)
			setMaxPokemon(pokemons.count)
		})
	}, [page]);

	return (
		<div className={classes.pokemon_page}>
			<h1>Pokemon</h1>
			{isLoading ? 
				<img src={loadingImg} alt='Loading...' className={classes.loading_img}/> 
				:
				<PokemonList pokemonList={pokemonList} handleShow={handleShow}/>
			}
			<Pagination prev={handlePrev} page={page+1} next={handleNext}/>
			{show &&
				<PokemonModal pokemon={shownPokemon} handleShow={handleShow}/>
			}
		</div>
	);
};

export default PokemonPage;
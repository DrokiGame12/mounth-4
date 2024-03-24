import React, { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import PokemonList from '../../components/pokemonList/PokemonList';
import loadingImg from '../../imgs/loading.gif'
import Button from '../../components/button/Button';
import classes from './PokemonPage.module.sass'

const PokemonPage = () => {
    const [pokemonList, setPokemonList] =useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [maxPokemon, setMaxPokemon] = useState(0)
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(20)
    const [show, setShow] = useState(false)
    const [shownPokemon, setShownPokemon] = useState({})

    const getApi = async() => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${limit*page}&limit=${limit}`);
            const  data = await response.json()
            setPokemonList(data.results)
            setMaxPokemon(data.count)
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
        getApi()
    }, [page]);

    return (
        <div className={classes.pokemon_page}>
            <Pagination prev={handlePrev} page={page+1} next={handleNext}/>
            {isLoading ? 
                <img src={loadingImg} alt='Loading...' className={classes.loading_img}/> 
                : 
                <PokemonList pokemonList={pokemonList}/>
            }
        </div>
    );
};

export default PokemonPage;
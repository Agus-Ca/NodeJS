const { http } = require('../plugins')

const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
    
    //return fetch( url )
    //    .then( ( response ) => response.json())
    //    .then( ( pokemon ) => pokemon.name )

    //const response = await fetch( url );
    //const pokemon = await response.json();
    //return pokemon.name;

    const pokemon = await http.get( url )

    return pokemon.name;
}

module.exports = {
    getPokemonById,
}
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// objeto armazenado no useState
function App() {
  const [pokemon0, setPokemon0] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
    id: 0
  });

  const [pokemon1, setPokemon1] = useState(
    {
      name: "Charmander",
      type: "Fire",
      evolved: false,
      weight: 3,
      color: 'orange',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      id: 1
    });

  const [pokemon2, setPokemon2] = useState(
    {
      name: "Bulbassaur",
      type: "grass",
      evolved: false,
      weight: 2,
      color: 'green',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      id: 2
    });



  const [pokemon3, setPokemon3] = useState(
    {
      name: "Squirtle",
      type: "Water",
      evolved: true,
      weight: 3,
      color: 'blue',
      image: '  https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      id: 3
    });

  const [pokemon4, setPokemon4] = useState(
    {
      name: "Pikachu",
      type: "Electric",
      evolved: true,
      weight: 4,
      color: 'yellow',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      id: 4
    });

  const evoluirPokemon = (pokemon) => {
    console.log("Cliquei no botão de evoluir")
    if (pokemon.id === 0) {
     //Para ver se pode evoluir novamente 
     // somente o pichu tem essa condição poe enquanto
      if (pokemon.evolved === false) //para evoluir novamente caso o botao seja clicado
      {
        setPokemon0({
          ...pokemon0,
          name: "Pikachu",
          evolved: true,
          weight: 4,
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        });
      }

      else if(pokemon.evolved === true) //para evoluir para o prox estágio
      {
        setPokemon0({
          ...pokemon4,
          name: "Raichu",
          evolved: true,
          weight: 10,
          image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
        });
      }
    }
    /////////////////////////////
    //para verificar se os outros podem evoluir
    else if (pokemon.id === 1) {
      setPokemon1({
        ...pokemon1,
        name: "Charizard",
        evolved: true,
        weight: 10,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      });
    }

    else if (pokemon.id === 2) {
      setPokemon2({
        ...pokemon2,
        name: "Venosaur",
        evolved: true,
        weight: 10,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        id: 6
      });
    }

    else if (pokemon.id === 3) {
      setPokemon3({
        ...pokemon3,
        name: "Blastoise",
        evolved: true,
        weight: 10,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
      });
    }

    else if (pokemon.id === 4) {
      setPokemon4({
        ...pokemon4,
        name: "Raichu",
        evolved: true,
        weight: 10,
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
      });

    }
  }


  return (<>
    <GlobalStyles />
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon0} evoluirPokemon={evoluirPokemon} />
      <PokemonCard pokemon={pokemon1} evoluirPokemon={evoluirPokemon} />
      <PokemonCard pokemon={pokemon2} evoluirPokemon={evoluirPokemon} />
      <PokemonCard pokemon={pokemon3} evoluirPokemon={evoluirPokemon} />
      <PokemonCard pokemon={pokemon4} evoluirPokemon={evoluirPokemon} />
    </FlexContainer>
  </>

  );
}

export default App;

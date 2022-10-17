import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
import styled from 'styled-components'

//Só para formatar as imagens
const ImgFormatada = styled.img
`
  height:300px;
  width:auto;
`

const PokemonCard = (props) => {

  return (
    <Card color={props.pokemon.color}>
        <ImgFormatada src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => props.evoluirPokemon(props.pokemon)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard
import React from 'react'
import { SingleCharacter } from './SingleCharacter'

export const Characters = ({characters, searchfield}) => {
    // console.log(characters)
    const filteredCharacters = characters.filter(char=>{
        return char.name.toLowerCase().includes(searchfield.toLowerCase());
    })
  return (
    <div>
        {
            filteredCharacters.map((character)=>{
                return (
                    <SingleCharacter key={character.id} id={character.id} name={character.name} gender={character.gender} image={character.image} />
                )
            })
        }
    </div>
  )
}

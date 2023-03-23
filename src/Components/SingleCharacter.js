import React from 'react'

export const SingleCharacter = ({id,name,gender, image}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={image} alt="/" />
        <h1 className='b'>{name}</h1>
        <p className='i'>{gender}</p>
    </div>
  )
}

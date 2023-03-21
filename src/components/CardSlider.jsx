import React from 'react'
import Card from './Card'

export default function CardSlider( { data, title } ) {
  return (
  <div className='flex'>
    {
      data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />
        })
    }
    
  </div>
)
}


import React from 'react'

interface CardProps {
  country: string
  numberOfPlaces: number
  rating: string
  imgSrc: string
}

const Card = ({ country, numberOfPlaces, rating, imgSrc }: CardProps) => {
  return (
    <div
      className="flex h-60 w-40 flex-col justify-between rounded-2xl p-3 text-white"
      style={{
        background: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-10 w-10 items-center justify-center self-end rounded-full bg-gray-400 ring-2 ring-white">
        {rating}
      </div>
      <div>
        <h3 className="text-xl font-bold">{country}</h3>
        <p className="text-sm">{numberOfPlaces} must see places</p>
      </div>
    </div>
  )
}

export default Card

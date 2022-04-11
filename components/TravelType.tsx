import React from 'react'

interface TravelTypeProps {
  emoji: string
  type: string
  active?: boolean
}

const TravelType = ({ emoji, type, active = false }: TravelTypeProps) => {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center space-y-3 rounded-full p-3 shadow-lg transition hover:scale-110 ${
        active ? 'bg-orange-500 text-white' : 'border-2 bg-white text-black'
      }`}
    >
      <div className="rounded-full bg-white p-3">{emoji}</div>
      <p className="font-medium">{type}</p>
    </div>
  )
}

export default TravelType

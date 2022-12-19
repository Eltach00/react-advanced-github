import React from 'react'
import { useAppSelector } from '../hooks/redux'

export default function FavouritesPage() {
  const { favorourites } = useAppSelector((state) => state.github)

  if (favorourites.length === 0) {
    return <p className="text-center">No items.</p>
  }
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorourites.map((fav) => (
          <li key={fav}>
            <a href={fav} target="_blank">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

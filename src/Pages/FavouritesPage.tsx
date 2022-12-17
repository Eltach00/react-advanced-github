import React from 'react'
import { useAppSelector } from '../hooks/redux'

export default function FavouritesPage() {
  const { favorourites } = useAppSelector((state) => state.github)

  if (favorourites.length === 0) {
    return <p className="text-center">No items.</p>
  }
  return (
    <ul className="list-none">
      {favorourites.map((fav) => (
        <li key={fav}>
          <a href={fav}>{}</a>
        </li>
      ))}
    </ul>
  )
}

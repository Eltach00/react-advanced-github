import { setFips } from 'crypto'
import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { favorourites } = useAppSelector((state) => state.github)
  const [isFav, setIsFav] = useState(favorourites.includes(repo.html_url))

  const { addFavourite, removeFavourite } = useActions()
  function addToFav(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }

  function removeFromFav(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }

  return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {!isFav && (
          <button
            onClick={addToFav}
            className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
          >
            Add
          </button>
        )}
        {isFav && (
          <button
            onClick={removeFromFav}
            className="py-2 px-4 bg-red-500 rounded hover:shadow-md transition-all"
          >
            Remove
          </button>
        )}
      </a>
    </div>
  )
}

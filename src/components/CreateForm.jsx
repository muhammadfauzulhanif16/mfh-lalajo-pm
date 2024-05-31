import { Input } from './Input.jsx'
import { useState } from 'react'

export const CreateForm = (props) => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    time: '',
  })
  
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        
        props.onStoreMovie({
          title: movie.title,
          genre: movie.genre,
          time: movie.time,
        })
        
        setMovie({
          title: '',
          genre: '',
          time: '',
        })
      }}
    >
      <Input
        label="Judul Film"
        value={movie.title}
        onChange={(e) => setMovie(
          { ...movie, title: e.target.value },
        )}
      />
      
      <Input
        label="Genre"
        value={movie.genre}
        onChange={(e) => setMovie(
          { ...movie, genre: e.target.value },
        )}
      />
      
      <Input
        label="Waktu Tayang"
        value={movie.time}
        type="datetime-local"
        onChange={(e) => setMovie(
          { ...movie, time: e.target.value },
        )}
      />
      
      <button
        type="submit"
        disabled={!movie.title || !movie.genre || !movie.time}
        className="h-12 bg-indigo-500 text-indigo-50 font-semibold hover:bg-indigo-600"
      >
        Tambah
      </button>
    </form>
  )
}

import {AppLayout} from "./layouts/AppLayout.jsx";
import {MovieList} from "./components/MovieList.jsx";
import {CreateForm} from "./components/CreateForm.jsx";
import {useState} from "react";
import {UpdateForm} from "./components/UpdateForm.jsx";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  
  const onStoreMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  }
  
  const onShowMovie = (movie) => {
    setMovie(movie);
  }
  
  const onUpdateMovie = (updatedMovie) => {
    const index = movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      movies[index] = updatedMovie;
      setMovies([...movies]);
    }
    
    setMovie(null);
  }
  
  const onDestroyMovie = (movieId) => {
    setMovies(
      movies.filter((movie) => movie.id !== movieId)
    )
  }
  
  return (
    <AppLayout>
      <section>
        <h1 className="text-2xl mb-4">{movie ? "Ubah" : "Tambah"} Film</h1>
        
        {movie ? <UpdateForm movie={movie} onUpdateMovie={onUpdateMovie} /> :
          <CreateForm onStoreMovie={onStoreMovie} />}
      </section>
      
      <section>
        <h1 className="text-2xl mb-4">Daftar Film</h1>
        
        <MovieList movies={movies} onShowMovie={onShowMovie}
                   onDestroyMovie={onDestroyMovie} />
      </section>
    </AppLayout>
  )
}

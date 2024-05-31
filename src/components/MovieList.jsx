import {MovieItem} from "./MovieItem.jsx";

export const MovieList = (props) => {
  const THList = ["Nama Film", "Genre", "Waktu Tayang", 'Aksi'];
  
  return (
    <table
      className="table-auto w-full border-collapse border-2 border-neutral-200">
      <thead>
      <tr className="h-12">
        {THList.map((th, id) => (
          <th key={id} className="px-4 border border-neutral-200">{th}</th>
        ))}
      </tr>
      </thead>
      
      <tbody>
      {props.movies.map((movie, id) => (
        <MovieItem
          key={id}
          {...movie}
          onShowMovie={() => props.onShowMovie(movie)}
          onDestroyMovie={() => props.onDestroyMovie(movie.id)}
        />
      ))}
      </tbody>
    </table>
  )
}

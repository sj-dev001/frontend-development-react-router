import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p className="no-movies">No movies found.</p>
      ) : (
        movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-link">
            <MovieCard movie={movie} />
          </Link>
        ))
      )}
    </div>
  )
}

export default MovieList

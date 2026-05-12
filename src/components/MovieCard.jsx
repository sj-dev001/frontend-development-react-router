const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="movie-poster"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster'
        }}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-rating">Rating: {movie.rating}/10</p>
      </div>
    </div>
  )
}

export default MovieCard

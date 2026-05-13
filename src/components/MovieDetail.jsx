import { useParams, Link } from 'react-router-dom'

const MovieDetail = ({ movies }) => {
  const { id } = useParams()
  const movie = movies.find((m) => m.id === Number(id))

  if (!movie) {
    return (
      <div className="detail-container">
        <h2>Movie not found</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <div className="detail-content">
        <img src={movie.posterURL} alt={movie.title} className="detail-poster" />
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <p className="detail-rating">Rating: {movie.rating}/10</p>
          <p className="detail-description">{movie.description}</p>
          {movie.trailerURL && (
            <div className="trailer-container">
              <h2>Trailer</h2>
              <iframe
                src={movie.trailerURL}
                title={`${movie.title} trailer`}
                className="trailer-iframe"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail

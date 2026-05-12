import { useState } from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import './App.css'

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.',
    posterURL: 'https://m.media-amazon.com/images/I/91Rc8GAmebL._AC_SL1500_.jpg',
    rating: 8.8,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterURL: 'https://m.media-amazon.com/images/I/81N7FmIJtmL._AC_SL1500_.jpg',
    rating: 9.0,
  },
  {
    id: 3,
    title: 'Interstellar',
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked with piloting a spacecraft along with a team of researchers to find a new planet for humans.",
    posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
    rating: 8.7,
  },
]

function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [titleFilter, setTitleFilter] = useState('')
  const [ratingFilter, setRatingFilter] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  })

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesRating =
      ratingFilter === '' || movie.rating >= Number(ratingFilter)
    return matchesTitle && matchesRating
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewMovie((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddMovie = (e) => {
    e.preventDefault()
    if (!newMovie.title || !newMovie.posterURL) return
    const movie = {
      id: Date.now(),
      title: newMovie.title,
      description: newMovie.description,
      posterURL: newMovie.posterURL,
      rating: Number(newMovie.rating) || 0,
    }
    setMovies((prev) => [...prev, movie])
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' })
    setShowForm(false)
  }

  return (
    <div className="app">
      <h1>Movie App</h1>

      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Movie'}
      </button>

      {showForm && (
        <form className="add-form" onSubmit={handleAddMovie}>
          <input
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleInputChange}
            required
          />
          <input
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleInputChange}
          />
          <input
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.5"
            placeholder="Rating (0-10)"
            value={newMovie.rating}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      )}

      <MovieList movies={filteredMovies} />
    </div>
  )
}

export default App

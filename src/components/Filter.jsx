const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating (0-10)"
        min="0"
        max="10"
        step="0.5"
        value={ratingFilter}
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  )
}

export default Filter

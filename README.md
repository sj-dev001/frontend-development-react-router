# Movie App

A React movie app built with Vite that lets users browse, filter, and add movies.

## Features

- Display a list of movies with poster, title, description, and rating
- Filter movies by title or minimum rating
- Add new movies using a form

## Tech Stack

- React 19
- Vite 8

## Components

- **MovieCard** – Renders a single movie (poster, title, description, rating)
- **MovieList** – Renders a grid of MovieCard components
- **Filter** – Provides inputs to filter movies by title and rating

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Folder Structure

```
src/
├── components/
│   ├── Filter.jsx
│   ├── MovieCard.jsx
│   └── MovieList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

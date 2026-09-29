import { useParams } from "react-router-dom";

import { mockMovies } from "@/src/entities/movie";

export function MoviePage() {
  const { movieId } = useParams();

  const movie = mockMovies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return <h1>Фильм не найден</h1>;
  }

  return (
    <main>
      <h1>{movie.title}</h1>

      <img src={movie.posterUrl} alt={movie.title} />

      <p>Жанр: {movie.genre.join(", ")}</p>
      <p>Продолжительность: {movie.duration} минут</p>
    </main>
  );
}

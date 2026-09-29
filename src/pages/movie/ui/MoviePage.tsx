import { useParams } from "react-router-dom";

import { mockMovies } from "@/src/entities/movie";
import { mockSessions } from "@/src/entities/session";

export function MoviePage() {
  const { movieId } = useParams();

  const movie = mockMovies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return <h1>Фильм не найден</h1>;
  }

  // Поиск сеансов
  const sessions = mockSessions.filter(
    (session) => session.movieId === movie.id,
  );

  return (
    <main>
      <h1>{movie.title}</h1>

      <img src={movie.posterUrl} alt={movie.title} />

      <p>Жанр: {movie.genre.join(", ")}</p>
      <p>Продолжительность: {movie.duration} минут</p>

      <p>Сеансы:</p>
      <ul className="flex gap-5">
        {sessions.map((session) => (
          <li key={session.id} className="border rounded-xl p-3">
            <time dateTime={session.startsAt}>
              {new Date(session.startsAt).toLocaleString("ru-RU", {
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
            <p>{session.hall}</p>
            <p>{session.price} ₽</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

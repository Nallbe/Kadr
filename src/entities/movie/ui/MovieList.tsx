import { mockMovies } from "../api/mocks";
import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
      {mockMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

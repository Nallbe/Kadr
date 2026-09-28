import { mockMovies } from "../api/mocks";
import { MovieCard } from "../ui/MovieCard";

export function MovieList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto py-5">
      {mockMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

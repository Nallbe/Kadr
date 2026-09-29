import type { Movie } from "../model/types";
import { MovieCard } from "../ui/MovieCard";

type MovieListProps = {
  movies: Movie[];
};

export function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto py-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

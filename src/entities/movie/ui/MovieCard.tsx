import type { Movie } from "../model/types";
import { Link } from "react-router-dom";

import Button from "@/src/shared/ui/Button";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex flex-col mx-auto w-full h-full gap-3">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="object-cover w-full max-w-105 aspect-2/3 rounded-lg"
      />
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <div className="flex flex-col text-gray-600">
        <p>
          {movie.genre.slice(0, 2).join(", ")}· {movie.duration} мин
        </p>
        <p></p>
      </div>
      <div>
        <Link to={`/movies/${movie.id}`}>
          <Button className="mt-auto" fullWidth>
            Выбрать сеанс
          </Button>
        </Link>
      </div>
    </div>
  );
}

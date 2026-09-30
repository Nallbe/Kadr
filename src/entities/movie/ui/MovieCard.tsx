import type { Movie } from "../model/types";
import { Link } from "react-router-dom";

import Button from "@/src/shared/ui/Button";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="
          aspect-2/3
          w-full
          max-w-65
          rounded-2xl
          object-cover
          shadow-2xl
          sm:max-w-[320px]
          md:mx-0
        "
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
          <Button className="mt-auto">Выбрать сеанс</Button>
        </Link>
      </div>
    </div>
  );
}

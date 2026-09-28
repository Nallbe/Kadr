import type { Movie } from "../model/types";

import Button from "@/src/shared/ui/Button";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex flex-col mx-auto w-full h-full gap-3">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="object-cover w-full aspect-2/3 rounded-lg"
      />
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <div className="flex flex-col text-gray-600">
        <p>Жанр: {movie.genre.join(", ")}</p>
        <p>Продолжительность: {movie.duration} минут</p>
      </div>
      <div>
        <Button className="mt-auto" fullWidth>
          Выбрать сеанс
        </Button>
      </div>
    </div>
  );
}

import type { Movie } from "../model/types";

const poster1 = "/public/posters/shmatrix.jpg";
const poster2 = "/posters/shdune.jpg";
const poster3 = "/posters/star-shrek.jpg";

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Шректрица",
    genre: ["Фантастика", "Боевик"],
    duration: 136,
    posterUrl: poster1,
  },
  {
    id: 2,
    title: "Шредюна",
    genre: ["Фантастика", "Боевик", "Драма", "Приключения"],
    duration: 155,
    posterUrl: poster2,
  },
  {
    id: 3,
    title: "Звёздный шрек",
    genre: ["Фантастика", "Боевик", "Приключения"],
    duration: 127,
    posterUrl: poster3,
  }

]
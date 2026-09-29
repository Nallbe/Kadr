import { mockMovies, MovieList } from "@/src/entities/movie/index";
import Container from "@/src/shared/ui/Container";

export function AfishaPage() {
  return (
    <main className="py-6">
      <Container>
        <h1 className="text-4xl font-bold">Сейчас в кино</h1>

        <p className="mt-2 text-lg text-gray-600">
          Выберите фильм для просмотра
        </p>
        <MovieList movies={mockMovies} />
      </Container>
    </main>
  );
}

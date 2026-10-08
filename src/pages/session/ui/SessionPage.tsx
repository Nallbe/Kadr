import { useParams, Link } from "react-router-dom";

import { mockSessions } from "@/src/entities/session";
import { mockMovies } from "@/src/entities/movie";

import Container from "@/src/shared/ui/Container";

export function SessionPage() {
  const { sessionId } = useParams();

  const session = mockSessions.find(
    (session) => session.id === Number(sessionId),
  );

  if (!session) {
    return (
      <main className="min-h-screen py-16">
        <Container>
          <h1 className="text-3xl font-bold">Сеанс не найден</h1>

          <Link to="/" className="mt-6 inline-block text-orange-primary">
            Вернуться к афише
          </Link>
        </Container>
      </main>
    );
  }

  const movie = mockMovies.find((movie) => movie.id === session.movieId);

  if (!movie) {
    return (
      <main className="min-h-screen py-16">
        <Container>
          <h1 className="text-3xl font-bold">
            Фильм для этого сеанса не найден
          </h1>

          <Link to="/" className="mt-6 inline-block text-orange-primary">
            Вернуться к афише
          </Link>
        </Container>
      </main>
    );
  }

  const startsAt = new Date(session.startsAt);

  return (
    <main className="min-h-screen bg-white py-10 md:py-16">
      <Container>
        <Link
          to={`/movies/${movie.id}`}
          className="
            inline-flex
            text-sm
            text-gray-500
            transition
            hover:text-orange-primary
          "
        >
          ← Вернуться к фильму
        </Link>

        <section className="mt-8">
          <p
            className="
              text-sm
              font-semibold
              tracking-[0.18em]
              text-orange-primary
              uppercase
            "
          >
            Выбор мест
          </p>

          <h1 className="mt-2 text-4xl font-bold">{movie.title}</h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl bg-gray-100 px-4 py-3">
              <p className="text-sm text-gray-500">Дата</p>

              <p className="mt-1 font-semibold">
                {startsAt.toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 px-4 py-3">
              <p className="text-sm text-gray-500">Время</p>

              <p className="mt-1 font-semibold">
                {startsAt.toLocaleTimeString("ru-RU", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 px-4 py-3">
              <p className="text-sm text-gray-500">Зал</p>
              <p className="mt-1 font-semibold">{session.hall}</p>
            </div>

            <div className="rounded-xl bg-gray-100 px-4 py-3">
              <p className="text-sm text-gray-500">Цена</p>
              <p className="mt-1 font-semibold">{session.price} ₽</p>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold">Выберите места</h2>

            <p className="mt-3 text-gray-500"></p>
          </section>
        </section>
      </Container>
    </main>
  );
}

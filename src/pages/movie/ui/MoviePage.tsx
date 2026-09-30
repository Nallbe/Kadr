import { Link, useParams } from "react-router-dom";

import { mockMovies } from "@/src/entities/movie";
import { mockSessions } from "@/src/entities/session";
import Container from "@/src/shared/ui/Container";

export function MoviePage() {
  const { movieId } = useParams();

  const movie = mockMovies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return (
      <Container>
        <main className="py-16">
          <h1 className="text-3xl font-bold">Фильм не найден</h1>

          <Link to="/" className="mt-6 inline-block text-orange-primary">
            Вернуться к афише
          </Link>
        </main>
      </Container>
    );
  }

  const sessions = mockSessions.filter(
    (session) => session.movieId === movie.id,
  );

  return (
    <main className="min-h-screen bg-[#111111] py-10 text-white md:py-16">
      <Container>
        <Link
          to="/"
          className="mb-8 inline-flex text-sm text-white/60 transition hover:text-orange-primary"
        >
          ← Вернуться к афише
        </Link>

        <section className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="aspect-[2/3] w-full max-w-[320px] rounded-2xl object-cover shadow-2xl"
          />

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-primary">
              Сейчас в кино
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {movie.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genre.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-8 text-white/70">
              <div>
                <p className="text-sm text-white/40">Продолжительность</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {movie.duration} минут
                </p>
              </div>

              <div>
                <p className="text-sm text-white/40">Возраст</p>
                <p className="mt-1 text-lg font-semibold text-white">12+</p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl leading-7 text-white/65">
              Описание фильма мы добавим в модель чуть позже. Здесь будет
              краткий сюжет без спойлеров и дополнительная информация.
            </p>
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-primary">
              Расписание
            </p>

            <h2 className="mt-2 text-3xl font-bold">Выберите сеанс</h2>
          </div>

          {sessions.length === 0 ? (
            <div className="rounded-2xl bg-white/5 p-6 text-white/60">
              Для этого фильма пока нет доступных сеансов.
            </div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sessions.map((session) => {
                const startsAt = new Date(session.startsAt);

                return (
                  <li key={session.id}>
                    <Link
                      to={`/sessions/${session.id}`}
                      className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-orange-primary/60 hover:bg-white/8"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <time
                            dateTime={session.startsAt}
                            className="text-2xl font-bold group-hover:text-orange-primary"
                          >
                            {startsAt.toLocaleTimeString("ru-RU", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </time>

                          <p className="mt-1 text-[13px] text-white/50">
                            {startsAt.toLocaleDateString("ru-RU", {
                              day: "numeric",
                              month: "long",
                            })}
                          </p>
                        </div>

                        <span className="rounded-full bg-orange-primary px-3 py-1 text-sm font-semibold text-black">
                          {session.price} ₽
                        </span>
                      </div>

                      <p className="mt-5 text-white/70">{session.hall}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </Container>
    </main>
  );
}

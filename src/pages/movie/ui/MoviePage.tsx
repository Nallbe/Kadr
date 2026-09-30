import { Link, useParams } from "react-router-dom";

import { mockMovies } from "@/src/entities/movie";
import { mockSessions } from "@/src/entities/session";
import Container from "@/src/shared/ui/Container";

export function MoviePage() {
  const { movieId } = useParams();

  const movie = mockMovies.find((movie) => movie.id === Number(movieId));

  if (!movie) {
    return (
      <main className="min-h-screen py-16">
        <Container>
          <h1 className="text-3xl font-bold">Фильм не найден</h1>

          <Link to="/" className="mt-6 inline-block text-orange-primary">
            Вернуться к афише
          </Link>
        </Container>
      </main>
    );
  }

  const sessions = mockSessions.filter(
    (session) => session.movieId === movie.id,
  );

  return (
    <main className="min-h-screen bg-white py-10 text-black md:py-16">
      <Container>
        <Link
          to="/"
          className="
            mb-8
            inline-flex
            text-sm
            text-gray-500
            transition
            hover:text-orange-primary
          "
        >
          ← Вернуться к афише
        </Link>

        <section className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="
              mx-auto
              aspect-2/3
              w-full
              max-w-65
              rounded-2xl
              object-cover
              shadow-2xl
              sm:max-w-80
              md:mx-0
            "
          />

          <div className="flex flex-col justify-center">
            <p
              className="
                mb-3
                text-sm
                font-semibold
                tracking-[0.2em]
                text-orange-primary
                uppercase
              "
            >
              Сейчас в кино
            </p>

            <h1 className="text-4xl leading-tight font-bold md:text-5xl">
              {movie.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genre.map((genre) => (
                <span
                  key={genre}
                  className="
                    rounded-full
                    bg-gray-100
                    px-4
                    py-2
                    text-sm
                    text-gray-700
                  "
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-sm text-gray-500">Продолжительность</p>

                <p className="mt-1 text-lg font-semibold">
                  {movie.duration} минут
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Возраст</p>
                <p className="mt-1 text-lg font-semibold">12+</p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl leading-7 text-gray-600">
              Описание фильма мы добавим в модель чуть позже. Здесь будет
              краткий сюжет без спойлеров и дополнительная информация.
            </p>
          </div>
        </section>

        <section className="mt-14 border-t border-gray-200 pt-10">
          <p
            className="
              text-sm
              font-semibold
              tracking-[0.18em]
              text-orange-primary
              uppercase
            "
          >
            Расписание
          </p>

          <h2 className="mt-2 text-3xl font-bold">Выберите сеанс</h2>

          {sessions.length === 0 ? (
            <div className="mt-6 rounded-2xl bg-gray-100 p-6 text-gray-600">
              Для этого фильма пока нет доступных сеансов.
            </div>
          ) : (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sessions.map((session) => {
                const startsAt = new Date(session.startsAt);

                return (
                  <li key={session.id}>
                    <Link
                      to={`/sessions/${session.id}`}
                      className="
                        group
                        block
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        p-5
                        shadow-sm
                        transition
                        hover:-translate-y-1
                        hover:border-orange-primary
                        hover:shadow-md
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <time
                            dateTime={session.startsAt}
                            className="
                              text-2xl
                              font-bold
                              transition
                              group-hover:text-orange-primary
                            "
                          >
                            {startsAt.toLocaleTimeString("ru-RU", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </time>

                          <p className="mt-1 text-sm text-gray-500">
                            {startsAt.toLocaleDateString("ru-RU", {
                              day: "numeric",
                              month: "long",
                            })}
                          </p>
                        </div>

                        <span
                          className="
                            rounded-full
                            bg-orange-primary
                            px-3
                            py-1
                            text-sm
                            font-semibold
                            text-black
                          "
                        >
                          {session.price} ₽
                        </span>
                      </div>

                      <p className="mt-5 text-gray-600">{session.hall}</p>
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

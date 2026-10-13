import { useParams, Link } from "react-router-dom";

import { cn } from "@/src/shared/lib/cn";

import { mockSessions } from "@/src/entities/session";
import { mockMovies } from "@/src/entities/movie";
import { mockSeats } from "@/src/entities/seat";

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
            {/* Данные о сеансе */}
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

          {/* Выбор места */}
          <section className="mt-10 sm:mt-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Выберите места</h2>

            <div className="mt-8 flex justify-center sm:mt-12 lg:mt-14">
              <div
                className="
                  flex
                  w-full
                  max-w-3xl
                  flex-col
                  items-center
                  gap-8
                  rounded-xl
                  bg-gray-200
                  p-4
                  sm:gap-10
                  sm:p-8
                  lg:gap-12
                  lg:p-10"
              >
                <div
                  className="
                    flex
                    w-2/3
                    max-w-md
                    flex-col
                    items-center
                    sm:w-1/2
                  "
                >
                  <p className="text-sm text-gray-600 sm:text-base">Экран</p>

                  <div
                    className="
                      mt-2
                      h-2
                      w-full
                      rounded-lg
                      bg-gray-400
                      sm:h-3
                      lg:h-4"
                  />
                </div>

                {/* Прокрутка схемы на маленьком экране */}
                <div className="w-full overflow-x-auto pb-2">
                  <div
                    className="
                      mx-auto
                      grid
                      w-max
                      grid-cols-8
                      gap-1.5
                      rounded-lg
                      bg-white
                      py-4
                      pr-4
                      pl-8
                      sm:gap-3
                      sm:py-5
                      sm:pr-5
                      sm:pl-10
                      lg:gap-4
                      lg:py-6
                      lg:pr-6"
                  >
                    {mockSeats.map((seat) => {
                      const isOccupied = session.occupiedSeatIds.includes(
                        seat.id,
                      );

                      const isFirstSeatInRow = seat.number === 1;

                      return (
                        <div
                          key={seat.id}
                          className="relative flex items-center justify-center"
                        >
                          {isFirstSeatInRow && (
                            <span
                              className="
                                absolute
                                top-1/2
                                right-full
                                mr-2
                                -translate-y-1/2
                                whitespace-nowrap
                                text-xs
                                text-gray-500
                                sm:mr-3
                                sm:text-sm"
                            >
                              {seat.row}
                            </span>
                          )}

                          <button
                            type="button"
                            disabled={isOccupied}
                            onClick={() => {
                              console.log(seat);
                            }}
                            className={cn(
                              `
                              h-7
                              w-7
                              cursor-pointer
                              rounded-full
                              bg-[#ffa4b1]
                              text-xs
                              transition-colors
                              duration-300
                              sm:h-8
                              sm:w-8
                              sm:text-sm
                              lg:h-9
                              lg:w-9
                            `,
                              !isOccupied && "hover:bg-[#fd5e6b]",
                              isOccupied && "cursor-not-allowed bg-gray-400",
                            )}
                          >
                            <span className="text-white">{seat.number}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
}

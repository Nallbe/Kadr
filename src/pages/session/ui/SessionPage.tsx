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
          <section className="mt-12">
            <h2 className="text-3xl font-bold ">Выберите места</h2>
            <div className="flex mt-14  justify-center items-center">
              <div className="flex flex-col justify-center items-center bg-gray-200 p-10 rounded-xl gap-12">
                <div className="w-[35%] flex flex-col items-center ml-4">
                  <p>Экран</p>
                  <div className="bg-gray-400 h-4 w-full mt-2 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-8 gap-4 rounded-lg bg-white py-6 pr-6 pl-10">
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
                          <span className="absolute top-1/2 right-full mr-4 -translate-y-1/2 whitespace-nowrap text-sm text-gray-500">
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
                            "h-9 w-9 cursor-pointer rounded-full bg-[#ffa4b1]",
                            "transition-colors duration-300",
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
          </section>
        </section>
      </Container>
    </main>
  );
}

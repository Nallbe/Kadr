import { useParams, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { mockSessions } from "@/src/entities/session";
import { mockMovies } from "@/src/entities/movie";
import { mockSeats } from "@/src/entities/seat";

import { SeatButton } from "@/src/entities/seat/";
import { TicketsList } from "@/src/widgets/tickets-list";
import { NotFound } from "@/src/shared/ui/NotFound";

import { cn } from "@/src/shared/lib/cn";

import Container from "@/src/shared/ui/Container";

export function SessionPage() {
  const { sessionId } = useParams();
  const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]);

  const session = mockSessions.find(
    (session) => session.id === Number(sessionId),
  );

  if (!session) {
    return (
      <NotFound
        title="Сеанс не найден"
        backLabel="Вернуться к афише"
        backTo="/"
      />
    );
  }

  const movie = mockMovies.find((movie) => movie.id === session.movieId);

  if (!movie) {
    return (
      <NotFound
        title="Фильм для этого сеанса не найден"
        backLabel="Вернуться к афише"
        backTo="/"
      />
    );
  }

  const startsAt = new Date(session.startsAt);

  function handleSeatClick(seatId: number) {
    setSelectedSeatIds((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  }

  useEffect(() => {
    console.log(selectedSeatIds);
  }, [selectedSeatIds]);
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

            <div
              className={cn(
                `
      mt-8
      flex
      flex-col
      gap-8
      sm:mt-12
      lg:mt-14
    `,
                selectedSeatIds.length > 0 &&
                  `
        lg:grid
        lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]
        lg:grid-rows-[425px]
        lg:items-stretch
        lg:gap-8
      `,
              )}
            >
              {/* Схема зала */}
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
                lg:h-full
                lg:max-w-none
                lg:gap-12
                lg:p-10
                "
              >
                {/* Экран */}
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
                    w-[60%]
                    rounded-lg
                    bg-gray-400
                    sm:h-3
                    lg:h-4
                  "
                  />
                </div>

                {/* Кресла */}
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
                    lg:pr-6
                  "
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
                              sm:text-sm
                            "
                            >
                              {seat.row}
                            </span>
                          )}

                          <SeatButton
                            seat={seat}
                            isOccupied={isOccupied}
                            isSelected={selectedSeatIds.includes(seat.id)}
                            handleSeatClick={handleSeatClick}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Выбранные билеты */}
              {selectedSeatIds.length > 0 && (
                <aside className="h-full min-h-0 w-full">
                  <TicketsList
                    selectedSeatIds={selectedSeatIds}
                    sessionPrice={session.price}
                  />
                </aside>
              )}
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
}

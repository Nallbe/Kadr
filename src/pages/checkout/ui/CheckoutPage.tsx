import { NotFound } from "@/src/shared/ui/NotFound";
import Container from "@/src/shared/ui/Container";
import Button from "@/src/shared/ui/Button";

import { mockSessions } from "@/src/entities/session";
import { mockSeats } from "@/src/entities/seat";
import { mockMovies } from "@/src/entities/movie";

import type { RootState } from "@/src/app/store/store";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function CheckoutPage() {
  const booking = useSelector((state: RootState) => state.booking);

  if (booking.selectedSeatIds.length === 0) {
    return (
      <main className="py-10">
        <Container>
          <h2 className="text-xl font-bold">Места не выбраны</h2>
          <Link
            className="text-orange-primary"
            to={
              booking.sessionId !== null
                ? `/sessions/${booking.sessionId}`
                : "/"
            }
          >
            Выбрать места
          </Link>
        </Container>
      </main>
    );
  }

  const session = mockSessions.find((item) => item.id === booking.sessionId);

  if (!session) {
    return (
      <NotFound
        title="Сеанс не найден"
        description="Запрашиваемый сеанс не существует или был удален. Выберите другой или попробуйте позже."
        backTo="/"
        backLabel="Вернуться к афише"
      />
    );
  }

  const selectedSeatIds = booking.selectedSeatIds;

  const startsAt = new Date(session.startsAt);

  const movie = mockMovies.find((movie) => movie.id === session.movieId);

  if (!movie) {
    return (
      <NotFound
        title="Фильм для этого сеанса не найден"
        description="Запрашиваемый фильм не существует или был удален. Выберите другой или попробуйте позже."
        backTo="/"
        backLabel="Вернуться к афише"
      />
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Link
            to={`/sessions/${session.id}`}
            className="
            inline-flex
            text-sm
            text-gray-500
            transition-colors
            hover:text-orange-primary
          "
          >
            ← Изменить места
          </Link>

          <div className="mt-6">
            <p
              className="
              text-sm
              font-semibold
              tracking-[0.18em]
              text-orange-primary
              uppercase
            "
            >
              Последний шаг
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Оформление заказа
            </h1>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start lg:gap-8">
            {/* Информация о заказе */}
            <div className="flex min-w-0 flex-col gap-6">
              {/* Фильм и сеанс */}
              <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-2xl font-bold">{movie.title}</h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-gray-100 p-4">
                    <p className="text-sm text-gray-500">Дата</p>

                    <p className="mt-1 font-semibold">
                      {startsAt.toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-100 p-4">
                    <p className="text-sm text-gray-500">Время</p>

                    <p className="mt-1 font-semibold">
                      {startsAt.toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-100 p-4">
                    <p className="text-sm text-gray-500">Зал</p>
                    <p className="mt-1 font-semibold">{session.hall}</p>
                  </div>
                </div>
              </section>

              {/* Места */}
              <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold">Выбранные места</h2>

                  <span className="shrink-0 text-sm text-gray-500">
                    {selectedSeatIds.length} шт.
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {selectedSeatIds.map((seatId) => {
                    const seat = mockSeats.find((item) => item.id === seatId);

                    if (!seat) {
                      return null;
                    }

                    return (
                      <article
                        key={seat.id}
                        className="
                        rounded-xl
                        border
                        border-gray-200
                        p-4
                        transition-colors
                        hover:border-orange-primary
                      "
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold">
                              Ряд {seat.row}, место {seat.number}
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                              Стандартный билет
                            </p>
                          </div>

                          <p className="shrink-0 font-bold">
                            {session.price} ₽
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Итог */}
            <aside className="lg:sticky lg:top-8">
              <section className="rounded-2xl bg-gray-900 p-5 text-white shadow-lg sm:p-6">
                <h2 className="text-xl font-bold">Ваш заказ</h2>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex justify-between gap-4 text-gray-300">
                    <span>Билетов</span>
                    <span>{selectedSeatIds.length}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-gray-300">
                    <span>Цена билета</span>
                    <span>{session.price} ₽</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-white/20" />

                <div className="flex items-end justify-between gap-4">
                  <span className="font-semibold">Итого</span>

                  <span className="text-2xl font-bold text-orange-primary">
                    {selectedSeatIds.length * session.price} ₽
                  </span>
                </div>

                <Button className="mt-6 w-full text-white transition-colors hover:bg-amber-600">
                  Подтвердить заказ
                </Button>

                <Link
                  to={`/sessions/${session.id}`}
                  className="
                  mt-4
                  block
                  text-center
                  text-sm
                  text-gray-300
                  transition-colors
                  hover:text-white
                "
                >
                  Изменить места
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  );
}

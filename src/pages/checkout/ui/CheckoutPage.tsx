import { NotFound } from "@/src/shared/ui/NotFound";
import Container from "@/src/shared/ui/Container";
import Button from "@/src/shared/ui/Button";

import { mockSessions } from "@/src/entities/session/index";
import { mockMovies } from "@/src/entities/movie/index";

import type { RootState } from "@/src/app/store/store";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function CheckoutPage() {
  const booking = useSelector((state: RootState) => state.booking);

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
    <main className="py-10">
      <Container>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Оформление заказа</h1>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="text-lg font-semibold">
              {startsAt.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-md text-gray-600">{session.hall}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Выбранные места:</p>

            <div className="flex flex-col gap-4">
              {selectedSeatIds.map((seat) => {
                return (
                  <div className="flex flex-col gap-2">
                    <span>Ряд: {Math.ceil(seat / 8)}</span>
                    <span>Место: {seat % 8}</span>
                    <span>Цена: {session.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-lg font-semibold">
            <p>Количество билетов: {selectedSeatIds.length}</p>
            <p>Итоговая цена: {selectedSeatIds.length * session.price} ₽</p>
          </div>
          <div>
            <Button>Подвердить заказ</Button>
            <Link to={`/sessions/${session.id}`}>Изменить места</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

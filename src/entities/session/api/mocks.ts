import type { Session } from "../model/types";

export const mockSessions: Session[] = [
  {
    id: 1,
    movieId: 1,
    startsAt: "2026-09-30T12:30:00",
    hall: "Зал 1",
    price: 450,
    occupiedSeatIds: [2, 3, 10, 17],
  },
  {
    id: 2,
    movieId: 1,
    startsAt: "2026-09-30T18:30:00",
    hall: "Зал 2",
    price: 550,
    occupiedSeatIds: [1, 8, 15, 16, 24]
  },
  {
    id: 3,
    movieId: 1,
    startsAt: "2026-10-01T20:00:00",
    hall: "Зал 1",
    price: 600,
    occupiedSeatIds: [5, 8, 25, 36, 37]
  },
  {
    id: 4,
    movieId: 2,
    startsAt: "2026-09-30T14:00:00",
    hall: "Зал 3",
    price: 500,
    occupiedSeatIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 5,
    movieId: 2,
    startsAt: "2026-09-30T21:00:00",
    hall: "Зал 2",
    price: 650,
    occupiedSeatIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },
  {
    id: 6,
    movieId: 3,
    startsAt: "2026-10-01T17:30:00",
    hall: "Зал 1",
    price: 500,
    occupiedSeatIds: [12, 16, 1, 6, 9, 10],
  },
]
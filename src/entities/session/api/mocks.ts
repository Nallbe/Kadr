import type { Session } from "../model/types";

export const mockSessions: Session[] = [
  {
    id: 1,
    movieId: 1,
    startsAt: "2026-09-30T12:30:00",
    hall: "Зал 1",
    price: 450,
  },
  {
    id: 2,
    movieId: 1,
    startsAt: "2026-09-30T18:30:00",
    hall: "Зал 2",
    price: 550,
  },
  {
    id: 3,
    movieId: 1,
    startsAt: "2026-10-01T20:00:00",
    hall: "Зал 1",
    price: 600,
  },
  {
    id: 4,
    movieId: 2,
    startsAt: "2026-09-30T14:00:00",
    hall: "Зал 3",
    price: 500,
  },
  {
    id: 5,
    movieId: 2,
    startsAt: "2026-09-30T21:00:00",
    hall: "Зал 2",
    price: 650,
  },
  {
    id: 6,
    movieId: 3,
    startsAt: "2026-10-01T17:30:00",
    hall: "Зал 1",
    price: 500,
  },
]
import type { Seat } from "../model/types";

export const mockSeats: Seat[] = Array.from(
  { length: 40 },
  (_, index) => ({
    id: index + 1,
    row: Math.floor(index / 8) + 1,
    number: (index % 8) + 1,
  }),
);
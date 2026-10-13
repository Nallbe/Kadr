import type { Seat } from "@/src/entities/seat";

type TicketItemProps = {
  seat: Seat;
};

export function TicketItem({ seat }: TicketItemProps) {
  return (
    <div>
      <p>Ряд: {seat.row}</p>
      <p>Номер: {seat.number}</p>
    </div>
  );
}

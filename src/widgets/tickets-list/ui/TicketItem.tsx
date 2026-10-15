import type { Seat } from "@/src/entities/seat";

type TicketItemProps = {
  seat: Seat;
};

export function TicketItem({ seat }: TicketItemProps) {
  return (
    <div className="bg-white border-black border rounded-xl p-2 text-md font-bold">
      <p>Ряд: {seat.row}</p>
      <p>Место: {seat.number}</p>
    </div>
  );
}

import { mockSeats } from "@/src/entities/seat/";
import { TicketItem } from "./TicketItem";

type TicketListProps = {
  selectedSeatIds: number[];
  sessionPrice: number;
};

export function TicketsList({
  selectedSeatIds,
  sessionPrice,
}: TicketListProps) {
  return (
    <div className="bg-white rounded-xl w-full">
      <p className="text-orange-primary">El pepe</p>
      {selectedSeatIds.map((selectedSeatId) => {
        const seat = mockSeats.find(
          (seatItem) => selectedSeatId === seatItem.id,
        );

        if (!seat) {
          return null;
        }

        return <TicketItem key={seat.id} seat={seat} />;
      })}
      <div>
        <p>Цена: {sessionPrice * selectedSeatIds.length}</p>
      </div>
    </div>
  );
}

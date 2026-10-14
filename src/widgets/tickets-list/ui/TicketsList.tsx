import { mockSeats } from "@/src/entities/seat";
import { cn } from "@/src/shared/lib/cn";
import Button from "@/src/shared/ui/Button";

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
    <div
      className="
        flex
        h-full
        min-h-0
        w-full
        flex-col
        overflow-hidden
        rounded-xl
        bg-black
        pt-2
      "
    >
      {/* Прокручиваемая часть */}
      <div
        className={cn(
          `
            grid
            min-h-0
            flex-1
            grid-cols-1
            content-start
            gap-2
            p-2
            sm:grid-cols-2
            lg:grid-cols-2
          `,
          selectedSeatIds.length > 6 && "overflow-y-auto",
        )}
      >
        {selectedSeatIds.map((selectedSeatId) => {
          const seat = mockSeats.find(
            (seatItem) => selectedSeatId === seatItem.id,
          );

          if (!seat) {
            return null;
          }

          return <TicketItem key={seat.id} seat={seat} />;
        })}
      </div>

      {/* Цена и кнопка не прокручиваются */}
      <div
        className="
          flex
          shrink-0
          flex-col
          gap-3
          border-t-4
          border-gray-50
          p-2
        "
      >
        <p className="text-2xl font-bold text-orange-primary">
          Цена: {sessionPrice * selectedSeatIds.length} ₽
        </p>

        <Button className="w-full md:w-60 md:self-start lg:w-full">
          Купить
        </Button>
      </div>
    </div>
  );
}

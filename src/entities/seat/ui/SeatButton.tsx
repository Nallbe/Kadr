import { cn } from "@/src/shared/lib/cn";
import type { Seat } from "@/src/entities/seat/";

type SeatButtonProps = {
  seat: Seat;
  isOccupied: boolean;
  isSelected: boolean;
  handleSeatClick: (seatId: number) => void;
};

export function SeatButton({
  seat,
  isOccupied,
  isSelected,
  handleSeatClick,
}: SeatButtonProps) {
  return (
    <div key={seat.id} className="relative flex items-center justify-center">
      <button
        type="button"
        disabled={isOccupied}
        onClick={() => handleSeatClick(seat.id)}
        className={cn(
          `
          h-7
          w-7
          cursor-pointer
          rounded-full
          bg-gray-700
          text-xs
          transition-colors
          duration-300
          sm:h-8
          sm:w-8
          sm:text-sm
          lg:h-9
          lg:w-9
          `,
          !isOccupied && "hover:bg-gray-800",
          isOccupied && "cursor-not-allowed bg-gray-300",
          isSelected && "bg-orange-primary text-md hover:bg-orange-primary",
        )}
      >
        <span className="text-white">{seat.number}</span>
      </button>
    </div>
  );
}

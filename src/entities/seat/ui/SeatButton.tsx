import { cn } from "@/src/shared/lib/cn";
import type { Seat } from "@/src/entities/seat/";

type SeatButtonProps = {
  seat: Seat;
  isOccupied: boolean;
};

export function SeatButton({ seat, isOccupied }: SeatButtonProps) {
  return (
    <div key={seat.id} className="relative flex items-center justify-center">
      <button
        type="button"
        disabled={isOccupied}
        className={cn(
          `
          h-7
          w-7
          cursor-pointer
          rounded-full
          bg-[#ffa4b1]
          text-xs
          transition-colors
          duration-300
          sm:h-8
          sm:w-8
          sm:text-sm
          lg:h-9
          lg:w-9
          `,
          !isOccupied && "hover:bg-[#fd5e6b]",
          isOccupied && "cursor-not-allowed bg-gray-400",
        )}
      >
        <span className="text-white">{seat.number}</span>
      </button>
    </div>
  );
}

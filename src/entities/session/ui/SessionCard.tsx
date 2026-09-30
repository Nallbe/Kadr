import type { Session } from "../model/types";

import { Link } from "react-router-dom";

type SessionCardProps = {
  session: Session;
};

export function SessionCard({ session }: SessionCardProps) {
  const startsAt = new Date(session.startsAt);

  return (
    <li>
      <Link
        to={`/sessions/${session.id}`}
        className="
        group
        block
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:-translate-y-1
        hover:border-orange-primary
        hover:shadow-md
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <time
              dateTime={session.startsAt}
              className="
              text-2xl
              font-bold
              transition
              group-hover:text-orange-primary
              "
            >
              {startsAt.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>

            <p className="mt-1 text-sm text-gray-500">
              {startsAt.toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>

          <span
            className="
            rounded-full
            bg-orange-primary
            px-3
            py-1
            text-sm
            font-semibold
            text-black
            "
          >
            {session.price} ₽
          </span>
        </div>

        <p className="mt-5 text-gray-600">{session.hall}</p>
      </Link>
    </li>
  );
}

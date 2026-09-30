import type { Session } from "@/src/entities/session/index";
import { SessionCard } from "@/src/entities/session/index";

type SessionListProps = {
  sessions: Session[];
};

export function SessionList({ sessions }: SessionListProps) {
  return (
    <div>
      <h2 className="mt-2 text-3xl font-bold">Выберите сеанс</h2>

      {sessions.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-gray-100 p-6 text-gray-600">
          Для этого фильма пока нет доступных сеансов.
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => {
            return <SessionCard key={session.id} session={session} />;
          })}
        </ul>
      )}
    </div>
  );
}

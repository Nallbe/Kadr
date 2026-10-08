import { useParams } from "react-router-dom";
import { mockSessions } from "@/src/entities/session";

export function SessionPage() {
  const { sessionId } = useParams();

  const session = mockSessions.find(
    (session) => session.id === Number(sessionId),
  );

  if (!session) {
    return <h2>Сессия не найдена</h2>;
  }

  return (
    <div>
      <h1>Session Page</h1>
      <p>Session ID: {session.id}</p>
    </div>
  );
}
